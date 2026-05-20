async function main() {
    const res = await fetch('https://skyiata.netlify.app/assets/index-X-ZUSYqv.js');
    const text = await res.text();
    // Extract Korean strings, or strings generally used in UI
    const matches = text.match(/[가-힣0-9a-zA-Z\s,.-]{5,}/g);
    if(matches) {
       console.log(matches.filter(m => /[가-힣]/.test(m)).map(m => m.trim()).filter(m => m.length > 2).join('\n'));
    }
}

main().catch(console.error);
