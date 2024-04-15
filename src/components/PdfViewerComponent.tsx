import React, { useEffect, useRef, useState } from "react";
import "pspdfkit";

interface PdfViewerProps {
  document1: string;
  document2: string;
}

let instance: any;
let PSPDFKit: any;

export default function PdfViewerComponent(props: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    async function loadPdf() {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      const toolbarItemsDefault = PSPDFKit?.defaultToolbarItems;
      instance = await PSPDFKit?.load({
        licenseKey:
          "Demo Key goes here",
        container,
        document: props.document1,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
        toolbarItems: toolbarItemsDefault,
      });
    }

    loadPdf();

    return () => {
      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }
    };
  }, [props.document1]);

  useEffect(() => {
    const comparisonResult = async () => {
      if (instance && PSPDFKit) {
        const DocumentDescriptor = PSPDFKit.DocumentDescriptor;
        const originalDocument = new DocumentDescriptor({
          filePath: props.document1,
          pageIndexes: [0],
        });

        const changedDocument = new DocumentDescriptor({
          filePath: props.document2,
          pageIndexes: [0],
        });

        const textComparisonOperation = new PSPDFKit.ComparisonOperation(
          PSPDFKit.ComparisonOperationType.TEXT,
          {
            numberOfContextWords: 2,
          }
        );

        const comparisonResult = await instance.compareDocuments(
          { originalDocument, changedDocument },
          textComparisonOperation
        );
        console.log("comparisonResult: ", comparisonResult);
        const formattedResult = formatComparisonResult(comparisonResult);
        console.log("Comparision Result in better format:", formattedResult);
      }
    };
    comparisonResult();
  }, [props.document1, props.document2]);

  interface FormattedOperation {
    type: string;
    text: string;
  }

  interface FormattedHunk {
    changedRange: { length: number; position: number };
    operations: FormattedOperation[];
  }

  function formatComparisonResult(result: any[]): FormattedHunk[] {
    const formattedResult: FormattedHunk[] = [];

    result.forEach((docComparison) => {
      docComparison.documentComparisonResults.forEach((comparison) => {
        comparison.comparisonResults.forEach((result) => {
          result.hunks.forEach((hunk) => {
            const formattedHunk: FormattedHunk = {
              changedRange: hunk.changedRange,
              operations: [],
            };

            hunk.operations.forEach((operation: any) => {
              formattedHunk.operations.push({
                type: operation.type,
                text: operation.text,
              });
            });

            formattedResult.push(formattedHunk);
          });
        });
      });
    });

    return formattedResult;
  }

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
