<template>
	<div id="app">
		<!-- Floating Controls Removed -->
		<main class="main-content">
			<!-- Map View -->
			<div class="map-content">
				<div class="map-container">
					<iframe
						:src="mapEmbedUrl"
						width="100%"
						height="100%"
						style="border: 0"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						allow="geolocation; fullscreen"
						sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
						@load="onMapLoad"
						@error="onMapError"
					>
					</iframe>

					<!-- Loading overlay -->
					<div v-if="mapLoading" class="map-loading">
						<div class="spinner"></div>
						<p>Loading your guide...</p>
					</div>

					<!-- Error state -->
					<div v-if="mapError" class="map-error">
						<p v-if="isIOS">🍎 iOS detected</p>
						<p v-else>🗺️ Unable to load map</p>
						<p v-if="isIOS" class="ios-help">
							Tap below to open in Google Maps app
						</p>
						<button @click="openInGoogleMaps" class="retry-button">
							Open in Google Maps
						</button>
					</div>

					<!-- Instruction Overlay -->
					<div v-if="!mapLoading && !mapError" class="instruction-overlay">
						<div class="instruction-content">
							[LIST] Tap the small icon in the upper left to see location list
						</div>
					</div>
				</div>

				<!-- Floating Controls -->
				<div class="floating-controls">
					<button
						@click="openInGoogleMaps"
						class="control-button"
						title="Open in Google Maps"
					>
						�
					</button>
					<button
						@click="shareLocation"
						class="control-button"
						title="Share this guide"
					>
						📤
					</button>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted } from 'vue';

	// Reactive data
	const mapLoading = ref(true);
	const mapError = ref(false);
	const isIOS = ref(false);

	// Your original map data
	const mapEmbedUrl =
		'https://www.google.com/maps/d/embed?mid=1qtuAAYN6KZN2R0icCPuKFGhFIDZVol8&ll=41.299438526476706%2C-124.0400706491881&z=12';
	const mapViewerUrl =
		'https://www.google.com/maps/d/u/0/viewer?mid=1qtuAAYN6KZN2R0icCPuKFGhFIDZVol8&ll=41.299438526476706%2C-124.0400706491881&z=12';

	// Detect iOS
	const detectIOS = () => {
		return (
			/iPad|iPhone|iPod/.test(navigator.userAgent) ||
			(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
		);
	};

	// Computed properties
	const shareUrl = computed(() => window.location.href);

	// Methods
	const onMapLoad = () => {
		mapLoading.value = false;
	};

	const onMapError = () => {
		mapLoading.value = false;
		mapError.value = true;
	};

	const openInGoogleMaps = () => {
		window.open(mapViewerUrl, '_blank');
	};

	const shareLocation = () => {
		if (navigator.share) {
			navigator.share({
				title: '🌲 Prairie Creek Redwoods Guide',
				text: 'Check out this mobile guide to Prairie Creek Redwoods State Park!',
				url: shareUrl.value,
			});
		} else {
			// Fallback: copy to clipboard
			navigator.clipboard.writeText(shareUrl.value).then(() => {
				alert('Link copied to clipboard!');
			});
		}
	};

	// Lifecycle
	onMounted(() => {
		// Detect iOS
		isIOS.value = detectIOS();

		// On iOS, set a timeout to show error state if iframe doesn't load
		if (isIOS.value) {
			setTimeout(() => {
				if (mapLoading.value) {
					console.log('iOS iframe timeout - showing fallback');
					onMapError();
				}
			}, 5000); // 5 second timeout for iOS
		}
	});
</script>

<style scoped>
	/* Global styles and CSS variables */
	:root {
		--primary-color: #2d5016;
		--secondary-color: #4a7c59;
		--accent-color: #8fbc8f;
		--background-color: #f5f5f5;
		--text-color: #333;
		--border-radius: 12px;
		--shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	#app {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			sans-serif;
	}

	/* Main content */
	.main-content {
		flex: 1;
		position: relative;
	}

	.map-content {
		height: 100%;
		position: relative;
	}

	/* Map styles */
	.map-container {
		position: relative;
		height: 100vh;
		background: #f0f0f0;
	}

	.map-loading,
	.map-error {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.95);
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 3px solid #f3f3f3;
		border-top: 3px solid var(--primary-color);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 1rem;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.retry-button {
		padding: 0.75rem 1.5rem;
		border: 1px solid var(--primary-color);
		background: white;
		color: var(--primary-color);
		border-radius: var(--border-radius);
		cursor: pointer;
		font-size: 0.9rem;
		transition: all 0.3s ease;
	}

	.ios-help {
		font-size: 0.85rem;
		color: #666;
		margin: 0.5rem 0;
		text-align: center;
	}

	.retry-button:hover {
		background: var(--primary-color);
		color: white;
	}

	/* Instruction Overlay */
	.instruction-overlay {
		position: absolute;
		top: 15px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 999;
		animation: fadeInOut 8s ease-in-out;
		pointer-events: none;
	}

	.instruction-content {
		background: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 0.9rem;
		text-align: center;
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		white-space: nowrap;
	}

	@keyframes fadeInOut {
		0% {
			opacity: 0;
			transform: translateX(-50%) translateY(-10px);
		}
		15% {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
		85% {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateX(-50%) translateY(-10px);
		}
	}

	/* Mobile optimizations */
	@media (max-width: 768px) {
		.map-container {
			height: 100vh;
		}

		.instruction-content {
			font-size: 0.8rem;
			padding: 6px 12px;
		}
	}

	@media (max-width: 480px) {
		.instruction-overlay {
			top: 10px;
		}

		.instruction-content {
			font-size: 0.75rem;
			padding: 5px 10px;
			white-space: normal;
			max-width: 90vw;
		}
	}
</style>
