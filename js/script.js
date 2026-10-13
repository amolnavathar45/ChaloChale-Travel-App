function openTripModal() {
    const modal = document.getElementById("exampleDialog");
    modal.showModal();
}

function closeTripModal() {
    const modal = document.getElementById("exampleDialog");
    modal.close();
}

// Close modal when clicking outside
document.getElementById("exampleDialog")
    .addEventListener("click", function (event) {
        if (event.target === this) {
            this.close();
        }
    });