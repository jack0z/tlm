// Modal system
export const Modal = {
  init() {
    if (!document.getElementById("trumpModal")) {
      this.addStyles();
      this.createModal();
    }
  },

  addStyles() {
    const modalStyles = `
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
            // ... rest of modal styles ...
        `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
  },

  createModal() {
    const modalHTML = `
            <div class="trump-modal" id="trumpModal">
                <div class="modal-content">
                    <div class="modal-header" id="modalHeader">
                        🚨 TRUMP TERMINAL ALERT 🚨
                    </div>
                    <div class="modal-body" id="modalBody">
                    </div>
                    <div class="modal-footer">
                        <button class="modal-close" onclick="Modal.close()">TREMENDOUS!</button>
                    </div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  },

  show(content, header = "🚨 TRUMP TERMINAL ALERT 🚨") {
    const modal = document.getElementById("trumpModal");
    const modalBody = document.getElementById("modalBody");
    const modalHeader = document.getElementById("modalHeader");
    if (modal && modalBody && modalHeader) {
      modalHeader.innerHTML = header;
      modalBody.innerHTML = content;
      modal.style.display = "flex";
    }
  },

  close() {
    const modal = document.getElementById("trumpModal");
    if (modal) {
      modal.style.display = "none";
    }
  },
};
