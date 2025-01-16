// Add modal HTML and styles
export const modalStyles = document.createElement("style");
modalStyles.textContent = `
            .trump-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                z-index: 1000;
                justify-content: center;
                align-items: center;
            }

            .modal-content {
                background: #1a1a1a;
                border: 2px solid #666;
                border-radius: 8px;
                padding: 20px;
                max-width: 500px;
                width: 90%;
                color: #0f0;
                font-family: inherit;
                position: relative;
                animation: modalSlide 0.3s ease;
            }

            @keyframes modalSlide {
                from { transform: translateY(-20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }

            .modal-header {
                font-size: 1.2em;
                margin-bottom: 15px;
                color: #0f0;
                text-align: center;
                border-bottom: 1px solid #333;
                padding-bottom: 10px;
            }

            .modal-body {
                margin: 15px 0;
                line-height: 1.4;
            }

            .modal-footer {
                text-align: center;
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #333;
            }

            .modal-close {
                background: #333;
                color: #0f0;
                border: 1px solid #0f0;
                padding: 8px 16px;
                cursor: pointer;
                font-family: inherit;
                border-radius: 4px;
                transition: all 0.2s ease;
            }

            .modal-close:hover {
                background: #444;
                transform: translateY(-1px);
            }

            .button-line {
                margin: 8px 0;
                padding: 5px 0;
                display: flex;
                gap: 10px;
            }
            
            .button-line button {
                background: #000;
                color: #0f0;
                border: 1px solid #0f0;
                padding: 6px 12px;
                cursor: pointer;
                font-family: inherit;
                border-radius: 4px;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                gap: 5px;
                text-shadow: 0 0 5px #0f0;
            }
            
            .button-line button:hover {
                background: #001100;
                border-color: #00ff00;
                transform: translateY(-1px);
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
            }
            
            .button-line button:active {
                transform: translateY(0);
                box-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
            }
        `;
