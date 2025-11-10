import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: 'img',
	standalone: true
})
export class ImageFallbackDirective {
	private hasTriedPngFallback = false;

	constructor(private readonly elementRef: ElementRef<HTMLImageElement>) {}

	@HostListener('error')
	onError(): void {
		const img = this.elementRef.nativeElement;
		const currentSrc = img.getAttribute('src') || '';

		// Ignore data URIs or already-empty sources
		if (!currentSrc || currentSrc.startsWith('data:')) {
			return;
		}

		// Try swapping .webp -> .png once
		// Handle both regular paths and hashed production paths (e.g., image.webp?hash or image.hash.webp)
		if (!this.hasTriedPngFallback) {
			const srcLower = currentSrc.toLowerCase();
			
			// Check if it's a .webp file (handle query strings and hashes in production builds)
			if (srcLower.includes('.webp')) {
				this.hasTriedPngFallback = true;
				
				// Remove query string and hash if present, then replace .webp with .png
				let basePath = currentSrc.split('?')[0].split('#')[0];
				
				// Handle production build hashes (e.g., image.abc123.webp -> image.abc123.png)
				if (basePath.match(/\.webp$/)) {
					const pngSrc = basePath.slice(0, -5) + '.png';
					img.setAttribute('src', pngSrc);
					return;
				}
			}
		}

		// If .png fallback also fails, do nothing - let browser show broken image icon
		// This prevents showing wrong content like advertisements.png on all pages
		// Valid images will continue to display normally
		// Broken images will show browser's default broken image icon (acceptable)
	}
}


