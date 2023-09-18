document.addEventListener('DOMContentLoaded', function () {
    const suggestionForm = document.getElementById('suggestion-form');
    suggestionForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const suggestionInput = document.getElementById('suggestion');
        const suggestionText = suggestionInput.value;

        // Send the suggestion to the Discord webhook using fetch
        fetch('https://discord.com/api/webhooks/1152646152571850792/o18ys7IISBXH0QpNtDlFlmySf8NgN8n8yjBDsJHlVvboYXya84s232OHtEfBq_KmqcTK', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: suggestionText }),
        })
        .then(response => {
            if (response.ok) {
                alert('Suggestion submitted successfully!');
                suggestionInput.value = '';
            } else {
                alert('Failed to submit suggestion. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit suggestion. Please try again later.');
        });
    });
});