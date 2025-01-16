import { Modal } from './modal.js';

export const ShareFunctions = {
    twitter(text) {
        const tweetText = `🗣️ Trump Terminal says:\n\n${text}\n\n#TrumpTerminal #MAGA`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank', 'width=600,height=400');
    },
    
    truth(text) {
        Modal.show(`
            <h3>🦅 TRUTH SOCIAL ALERT 🦅</h3>
            <p>We're making sharing great again!</p>
            <p>Your truth:</p>
            <p style="margin: 10px 0; padding: 10px; border: 1px solid #0f0;">
                "${text}"
            </p>
            <p>Will be the biggest truth ever posted! (Coming soon!)</p>
        `, '📱 TRUTH SOCIAL INTEGRATION 📱');
    },
    
    save() {
        Modal.show(`
            <h3>💾 SAVING TRANSCRIPT 💾</h3>
            <p>We're saving the most perfect transcript ever!</p>
            <p>Nobody saves transcripts better than us!</p>
        `, '💾 TRUMP TERMINAL EXPORT 💾');
        
        setTimeout(() => {
            const content = `🇺🇸 TRUMP TERMINAL TRANSCRIPT 🇺🇸\n` +
                          `Generated: ${new Date().toLocaleString()}\n` +
                          `Rating: TREMENDOUS\n\n` +
                          `Make Terminals Great Again! 🦅`;
            
            const blob = new Blob([content], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `trump-terminal-${Date.now()}.txt`;
            a.click();
            window.URL.revokeObjectURL(url);
            
            setTimeout(() => Modal.close(), 1000);
        }, 1000);
    }
}; 