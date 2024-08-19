import React from "react";

const DownloadButton = ({ downloadUrl }) => {
  if (!downloadUrl) return null; // Tidak merender tombol jika URL unduhan tidak tersedia

  return (
    <>
      <button href={downloadUrl} className="px-2 py-1 bg-color-accent">
        Download
      </button>
    </>
  )
}

export default DownloadButton;
