import { Modal } from './modal.js';
import { ShareFunctions } from './share.js';

export function initializeTerminal() {
    Modal.init();
    
    cleanInputField.addEventListener('keypress', async function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            const inputValue = this.value.trim();
            this.value = '';
            this.disabled = true;
            
            // ... rest of the event listener code ...
            
            // Create buttons using ShareFunctions
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'line button-line';
            
            const twitterButton = document.createElement('button');
            twitterButton.textContent = '🐦 Tweet';
            twitterButton.onclick = () => ShareFunctions.twitter(responseText);
            
            const truthButton = document.createElement('button');
            truthButton.textContent = '📱 Truth';
            truthButton.onclick = () => ShareFunctions.truth(responseText);
            
            const saveButton = document.createElement('button');
            saveButton.textContent = '💾 Save';
            saveButton.onclick = () => ShareFunctions.save();
            
            buttonDiv.appendChild(twitterButton);
            buttonDiv.appendChild(truthButton);
            buttonDiv.appendChild(saveButton);
            
            content.insertBefore(buttonDiv, document.querySelector('.input-line'));
            
            this.disabled = false;
            this.focus();
        }
    });
} 