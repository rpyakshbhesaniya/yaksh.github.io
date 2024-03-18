function generateHTML(formData) {
    const { title, subText, body, author, attachments } = formData;

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Preview</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            .page-container {
                display: flex;
                justify-content: center;
                align-items: flex-start; 
                min-height: 100vh;
            }
            .preview-container {
                text-align: justify;
                max-width: 800px; 
                margin-top: 20vh; 
            }
            .preview-container p, .preview-container ul {
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
            }
            .preview-container ul {
                padding-inline-start: 0; /* Remove default padding for unordered lists */
            }
        </style>
    </head>
    <body>
        <div class="page-container">
            <div class="preview-container">
                <div class="header text-center mb-4 d-flex justify-content-center m-5 align-item center">
                    <img src="rapidPageBuilder.png" alt="Logo" class="mr-2" style="width: 50px;">
                    <h1 class="m-2">Rapid Page Builder</h1>
                </div>
                <hr>
                <h1 id="pageTitle" class="h1">${title}</h1>
                <h3 id="pageSubtext" class="h4">${subText}</h3>
                <p id="pageAuthor" class="text-muted">${author}</p>
                <div id="pageBody" class="mb-4">${body}</div>
                <div id="pageAttachments">
                    <p class="mb-1">Attachments:</p>
                    <ul id="attachmentsList" class="list-unstyled">
                        ${attachments.map(attachment => `<li>${attachment}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>   
    `;

    return htmlContent;
}

export { generateHTML };
