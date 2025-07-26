// SlideRenderer.jsx
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export const generateSlideTexture = (slideData, canvas) => {
  const ctx = canvas.getContext('2d');
  canvas.width = 1024;
  canvas.height = 1365; // Portrait aspect ratio matching your page dimensions
  
  // Dark background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Title
  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 48px Poppins, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(slideData.title, canvas.width / 2, 120);
  
  // Content
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '28px Poppins, sans-serif';
  const lines = slideData.content.split('\n');
  lines.forEach((line, index) => {
    ctx.fillText(line, canvas.width / 2, 200 + index * 40);
  });
  
  return canvas;
};
