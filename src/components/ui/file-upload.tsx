"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { CloudUpload } from "lucide-react";

export interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onFileSelect?: (files: File[]) => void;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    { className, onFileSelect, accept, maxFiles = 1, maxSize, ...props },
    ref
  ) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: (acceptedFiles) => {
        onFileSelect?.(acceptedFiles);
      },
      accept,
      maxFiles,
      maxSize,
    });

    return (
      <div
        {...getRootProps()}
        className={cn(
          "flex items-center gap-4 px-4 py-1 h-9 w-full border border-neutral-black-30 rounded bg-neutral-white-100 cursor-pointer hover:bg-gray-50 transition-colors",
          isDragActive && "bg-gray-50 border-primary-100",
          className
        )}
      >
        <input {...getInputProps()} ref={ref} {...props} />
        <CloudUpload className="h-5 w-5 text-neutral-black-50" />
        <span className="text-xs text-neutral-black-50">
          Drop files to attach, or browse
        </span>
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";

export { FileUpload };
