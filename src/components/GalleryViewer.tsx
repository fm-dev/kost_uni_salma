"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/kosData";

export default function GalleryViewer() {
  const [photo, setPhoto] = useState<(typeof GALLERY_ITEMS)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="gallery-grid">{GALLERY_ITEMS.map((item) => <button type="button" key={item.id} className="gallery-item" aria-label={`Perbesar foto ${item.title}`} onClick={() => { setPhoto(item); dialog.current?.showModal(); }}><Image src={item.image} alt={item.description} fill sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1199px) 25vw, 20vw" className="gallery-img" data-source="client" data-subject={item.title} /><span className="gallery-zoom" aria-hidden="true"><Maximize2 size={17} /></span></button>)}</div>
      <dialog ref={dialog} className="photo-dialog" aria-labelledby="photo-dialog-title" onClose={() => setPhoto(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        {photo && <><div className="photo-dialog-head"><h2 id="photo-dialog-title">{photo.title}</h2><button type="button" className="icon-button" onClick={() => dialog.current?.close()} aria-label="Tutup foto"><X size={22} /></button></div><div className="photo-dialog-image"><Image src={photo.image} alt={photo.description} fill sizes="100vw" style={{ objectFit: "contain" }} /></div></>}
      </dialog>
    </>
  );
}
