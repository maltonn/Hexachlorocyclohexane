firebase.auth().onAuthStateChanged(function(user) {
    GE('update_btn').addEventListener('click',()=>{
        user.updateProfile({
            displayName: 'hoge',//GE('username_inp').value,
            photoURL: 'man1.png',///TODO:情報によって変える
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
            window.alert(error)
        });
    
        db.collection("user").doc(uid).set({
            /*
            icpnpath:'man1.png',
            username: GE('username_inp').value,
            email: GE('email_inp').value,
            gender: GE('gender_inp').value,
            age_group: GE('age_group_inp').value, 
            religion:  GE('religion_inp').value,
            github:GE('github_inp').value,
            twitter:GE('twitter_inp').value,
            instagram:GE('instagram_inp').value,
            qiita:GE('qiita_inp').value,
            introduction:GE('introduction_inp').value,
            */
           username:'fuga',
           email:'fuga@example.com',
           gender:'female',
           religion:'東京',
           age_group:'20',
           twitter:'example',
           introduction:'いえーい',
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
            window.alert(error)
        })
    })
});



