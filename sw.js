<script>
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/BRITS-ABROAD-2025/sw.js')
    .then(reg => console.log('SW registered', reg))
    .catch(err => console.warn('SW failed', err));
}
</script>
