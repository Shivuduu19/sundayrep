'use client';
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaLoadingIndicator,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaCaptionsButton,
    MediaAirplayButton,
    MediaPipButton,
    MediaFullscreenButton,
    MediaErrorDialog,
    MediaLoopButton,
} from 'media-chrome/react';
import {
    MediaPlaybackRateMenu,
    MediaPlaybackRateMenuButton,
    MediaSettingsMenu,
    MediaSettingsMenuItem,
    MediaSettingsMenuButton,
    MediaRenditionMenu,
    MediaContextMenu,
    MediaContextMenuItem
} from 'media-chrome/react/menu';

import { useState } from 'react';

const chromeStyles = {
    '--media-primary-color': 'white',
    display: 'block',
    width: '100%',
    aspectRatio: 2.4,
    maxWidth: 960,
};

const toggleBool = (prev: boolean | undefined) => !prev;

export const Player = () => {
    const [mounted, setMounted] = useState<boolean>(true);
    const [noDefaultStore, setNoDefaultStore] = useState(false);
    return (
        <>
            <div>
                <button id="mount-btn" onClick={() => setMounted(toggleBool)}>
                    {mounted ? 'Unmount' : 'Mount'}
                </button>
                <span style={{ padding: '10px' }}>
                    <label htmlFor="toggleNoDefaultStore">
                        <code>noDefaultStore</code> (applies only on (re)creation)
                    </label>
                    <input
                        id="toggleNoDefaultStore"
                        type="checkbox"
                        onChange={() => setNoDefaultStore(toggleBool)}
                    ></input>
                </span>
            </div>
            <br />
            {mounted && (<MediaController hotkeys={"noarrowleft noarrowright"} style={chromeStyles as any} defaultSubtitles noDefaultStore={noDefaultStore}>
                <video
                    suppressHydrationWarning={true}
                    style={{ width: '100%', aspectRatio: 2.4 }}
                    slot="media"
                    src="https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/high.mp4"
                    preload="auto"
                    muted
                    crossOrigin=""
                >
                    <track
                        label="thumbnails"
                        default
                        kind="metadata"
                        src="https://image.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/storyboard.vtt"
                    />
                    <track
                        label="English"
                        kind="captions"
                        srcLang="en"
                        src="./vtt/en-cc.vtt"
                    />
                </video>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    slot="poster"
                    src="https://image.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/thumbnail.webp"
                    style={{
                        width: '100%',
                        height: '100%',
                        background: `center/cover no-repeat url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAABwAgCdASoQAAcAAQAcJbACdLoBJgALN3YuJFiQAP6YWQV+kfwz/U15OyfDLJfktLsUBsNc6MmJGK3NclPSL3/5Cvv4BFA+Uq8P/rs/69v1VTpZxcP6J8wAAAA="/></g></svg>')`,
                    }}
                    alt="woman in misery kneeling down in desert looking up at the sky"
                />
                <MediaContextMenu hidden>
                    <MediaContextMenuItem>
                        <a href="https://mux.com" target="_blank">Powered by Mux</a>
                    </MediaContextMenuItem>
                    <MediaContextMenuItem>
                        <MediaLoopButton></MediaLoopButton>
                    </MediaContextMenuItem>
                </MediaContextMenu>
                <MediaErrorDialog role="dialog" slot="dialog"></MediaErrorDialog>
                <MediaLoadingIndicator
                    noAutohide
                    slot="centered-chrome"
                    style={{ '--media-loading-indicator-icon-height': '200px' } as any}
                ></MediaLoadingIndicator>
                <MediaPlaybackRateMenu role="menu" hidden anchor="auto" rates={[.5, 1, 2]} />
                <MediaControlBar>
                    <MediaPlayButton mediaPaused={true}></MediaPlayButton>
                    <MediaSeekBackwardButton seekOffset={10}></MediaSeekBackwardButton>
                    <MediaSeekForwardButton seekOffset={10}></MediaSeekForwardButton>
                    <MediaTimeRange></MediaTimeRange>
                    <MediaTimeDisplay showDuration mediaDuration={134}></MediaTimeDisplay>
                    <MediaMuteButton mediaVolumeLevel="off"></MediaMuteButton>
                    <MediaVolumeRange></MediaVolumeRange>
                    <MediaPlaybackRateButton rates={[.5, 1, 2]}></MediaPlaybackRateButton>
                    <MediaPlaybackRateMenuButton></MediaPlaybackRateMenuButton>
                    <MediaSettingsMenuButton></MediaSettingsMenuButton>
                    <MediaSettingsMenu role="menu" hidden anchor="auto">
                        <MediaSettingsMenuItem>
                            Speed
                            <MediaPlaybackRateMenu slot="submenu" hidden>
                                <div slot="title">Speed</div>
                            </MediaPlaybackRateMenu>
                        </MediaSettingsMenuItem>
                        <MediaSettingsMenuItem>
                            Quality
                            <MediaRenditionMenu slot="submenu" hidden>
                                <div slot="title">Quality</div>
                            </MediaRenditionMenu>
                        </MediaSettingsMenuItem>
                    </MediaSettingsMenu>
                    <MediaCaptionsButton></MediaCaptionsButton>
                    <MediaAirplayButton></MediaAirplayButton>
                    <MediaPipButton></MediaPipButton>
                    <MediaFullscreenButton></MediaFullscreenButton>
                </MediaControlBar>
            </MediaController>)}
        </>
    );


};








{/* <div class="splide pointer-events-auto col-span-full col-start-1 row-start-2 h-full w-full is-initialized" id="splide02" role="region"><div class="splide__track h-full" id="splide02-track"><ul class="splide__list" id="splide02-list"><li class="splide__slide h-full w-full" id="splide02-slide01"><div class="flex h-full w-full items-center justify-center px-4 md:px-14 lg:px-18" style="opacity: 1; transform: none;"><media-controller class="overflow-hidden rounded-lg dark [--media-control-background:transparent] [--media-control-hover-background:transparent] [--media-font-family:var(--font-mono)] [--media-font-size:14px] [--media-preview-box-display:none] [--media-preview-thumbnail-border-radius:8px] [--media-range-bar-color:white] [--media-range-padding:0] [--media-range-thumb-opacity:0] [--media-range-track-height:2px] [--media-range-track-pointer-background:rgba(255,255,255,0.2)] [--media-text-content-height:18px] [--media-time-range-buffered-color:rgba(255,255,255,0.2)] [--media-tooltip-arrow-display:none] [--media-tooltip-background:var(--color-off-black)] sm:[--media-preview-box-display:flex] sm:[--media-range-thumb-opacity:1] pointer-events-auto h-full max-h-fit w-auto max-w-full" role="region" aria-label="video player" userinactive="" style="aspect-ratio: 16 / 9;" breakpointsm="" breakpointmd="" breakpointlg="" mediahasplayed="" mediaplaybackrate="1" mediavolume="1" mediavolumelevel="high" mediacurrenttime="108.941892" mediacastunavailable="unavailable" mediaairplayunavailable="unsupported" mediarenditionunavailable="unsupported" mediaaudiotrackunavailable="unsupported" medialang="en" mediastreamtype="on-demand" mediaseekable="0:159.125" mediaduration="159.125328" mediabuffered="0.065:159.125">
  <div class="z-50 flex flex-col"><div class="flex justify-between p-3 sm:order-last sm:p-4"><media-time-display showduration="" aria-valuetext="1 minute, 48 seconds of 2 minutes, 39 seconds" tabindex="0" role="progressbar" aria-label="playback time" mediacurrenttime="108.941892" mediaseekable="0:159.125" mediaduration="159.125328">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2 lucide-volume-2 h-4.5 w-4.5 fill-transparent" aria-hidden="true" slot="high"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2 lucide-volume-2 h-4.5 w-4.5 fill-transparent" aria-hidden="true" slot="medium"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume1 lucide-volume-1 h-4.5 w-4.5 fill-transparent" aria-hidden="true" slot="low"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x h-4.5 w-4.5 fill-transparent" aria-hidden="true" slot="off"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg></media-mute-button><media-fullscreen-button class="p-0.75" tabindex="0" role="button" aria-label="enter fullscreen mode" medialang="en">
          
        </media-preview-thumbnail>
        <media-preview-chapter-display medialang="en" aria-valuetext="chapter: en"></media-preview-time-display>
       
    </div>
    
   </media-time-range></div></div><div class="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 to-black/50"></div></media-control-bar></media-controller></div></li></ul></div></div> */}