import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

import {
  ThemeProvider,
  I18nProvider,
  Link,
  Avatar,
  FileUpload,
} from "@baseline-ui/core";
//import { MinusIcon } from "@baseline-ui/icons/24";
import "@baseline-ui/icons/dist/index.css";
import "@baseline-ui/recipes/dist/index.css";

function App() {
  const [document1, setDocument1] = useState<string>("dockeryamlV1.pdf");
  const [document2, setDocument2] = useState<string>("dockeryamlV2.pdf");

  const handleFileSelected1 = (files) => {
    if (files && files.length > 0) {
      const fileUrl = URL.createObjectURL(files[0]);
      setDocument1(fileUrl);
    }
  };

  const handleFileSelected2 = (files) => {
    if (files && files.length > 0) {
      const fileUrl = URL.createObjectURL(files[0]);
      setDocument2(fileUrl);
    }
  };

  return (
    <>
      <ThemeProvider>
        <I18nProvider locale="en-US">
          <div className="background"></div>
          <h1 className="first-heading">
            Learning
            <span className="first-heading--special">Baseline-UI</span>
            <Link
              href="https://pspdfkit.com"
              target="_blank"
              size="lg"
              style={{ alignItems: "center", width: "50px" }}
            >
              <Avatar
                name="Narashiman"
                size="md"
                hasNotifications
                style={{ color: "red", alignItems: "center", width: "50px" }}
              />
            </Link>
          </h1>
          <div className="container">
            <section className="stats">
              <section className="stat">
                <FileUpload
                  label="Upload the original file"
                  description=" OR - Drag and Drop here"
                  onChange={handleFileSelected1}
                  variant="inline"
                  onValueChange={(files) => handleFileSelected1(files)}
                  className="btnstyleUpload"
                />
              </section>
              <section className="stat">
                <FileUpload
                  label="Upload the modified file"
                  description=" OR - Drag and Drop here"
                  onChange={handleFileSelected2}
                  variant="inline"
                  onValueChange={(files) => handleFileSelected2(files)}
                  className="btnstyleUpload"
                />
              </section>
            </section>
            <div className="textarea">
              <PdfViewerComponent document1={document1} document2={document2} />
            </div>
          </div>
          <footer className="footer">
            <small className="copyright">
              &copy; Copyright ® 2010-2024 PSPDFKit GmbH. All Rights Reserved
            </small>
          </footer>
        </I18nProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
