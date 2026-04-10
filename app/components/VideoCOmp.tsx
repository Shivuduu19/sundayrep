'use client'
// import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useRef } from 'react'
import { MediaController } from 'media-chrome/react'

// const NoSSRMedia = dynamic(
//     () => import('media-chrome/react').then(m => m.MediaController),
//     { ssr: false }
// );

const VideoCOmp = ({ id, imageurl, vdourl, className = "relative isolate overflow-hidden size-full" }: { id?: string, imageurl: string, vdourl: string, className?: string }) => {
    const hasBlobbed = useRef(false);

    async function makeBlobUrl(videoElement: HTMLVideoElement) {
        if (!videoElement) return;
        if (hasBlobbed.current) return;
        hasBlobbed.current = true;

        // const originalURL = videoElement.getAttribute("src");
        // if (!originalURL) return;
        try {
            // const res = await fetch(originalURL, { mode: 'cors' });
            const response = await fetch(videoElement.src);
            const blob = await response.blob();

            const blobURL = URL.createObjectURL(blob);

            videoElement.src = blobURL;  // Replace real URL with a blob
        } catch (err) {
            console.error("Error converting to blob:", err);
        }
    }

    return (

        <MediaController id={id} className={className}>


            <Image slot='poster' alt="" src={imageurl} className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover transition-none duration-0 " width={900} height={900} style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes={'(max-width: 768px) 100vw, 760px'} />


            <video ref={(el) => {
                if (el) {
                    makeBlobUrl(el)
                }
            }} slot="media" muted autoPlay loop draggable="false" playsInline className="h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src={vdourl} />
        </MediaController>
    )
}

export default VideoCOmp