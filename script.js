const commentApp = {};

commentApp.formElement = document.querySelector('form')
commentApp.addComments = document.querySelector('#addComments')

commentApp.formElement.addEventListener('submit', function (event) {
    event.preventDefault();


    const userName = document.querySelector('input[name="name"]');
    const userEmail = document.querySelector('input[name="email"]');
    const userComment = document.querySelector('textarea[name="comment"]');
    const comment = userName.value + userEmail.value + userComment.value;


    if (comment) {
        const divElement = document.createElement('div');
        divElement.classList.add('commentFlex');
        commentApp.addComments.appendChild(divElement)


        const imgElement = document.createElement('img');
        imgElement.src = "../project-1-textilee/textilee-assets/comment-2.jpg";
        divElement.appendChild(imgElement)


        const secondDiv = document.createElement('div');
        divElement.appendChild(secondDiv)


        const firstPElement = document.createElement('p');
        firstPElement.classList.add('caption')

        const d = new Date('Wednesday December 10 2019')

        firstPElement.textContent = `${d} by ${userName.value}`
        secondDiv.appendChild(firstPElement);


        const secondPElement = document.createElement('p');
        secondPElement.textContent = userComment.value;
        secondDiv.appendChild(secondPElement)


        userName.value = '';
        userEmail.value = '';
        userComment.value = '';
    } else {
        alert('Please fill out all fields')
    }
})




commentApp.init = function () {
    commentApp.formElement.addEventListener();
}

commentApp.init();

