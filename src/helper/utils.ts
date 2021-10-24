export const toBase64 = (fileName: string, filePath: string) =>
  new Promise((resolve, reject) => {
    var file = new File([fileName], filePath);
    const reader = new FileReader();

    // Read file content on file loaded event
    reader.onload = function (event) {
      console.log('event result -->', event.target.result);
      resolve(event.target.result);
    };

    // Convert data to base64
    reader.readAsDataURL(file);
  });
