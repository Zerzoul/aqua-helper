export const mutations = {
    fetchFishes(state, data){
        state.fishesListe = data;
    },
    fetchBillets(state, data){
        state.billets = data;
    },
    // Sort and store comments
    fetchComments(state, data){
        let comments = [];
        for(let i=0; data.length>i;i++){
            if(data[i].answer_comment_id === null){
                const dataId = data[i].id;
                let answers = [];
                data.map(data=>{
                    if(data.answer_comment_id === dataId){
                        answers.push(data);
                    }
                });
                const comment = {
                    id: data[i].id,
                    postId: data[i].post_id,
                    answerCommentId: data[i].answer_comment_id,
                    author: data[i].author,
                    content: data[i].content,
                    date: data[i].date,
                    answers: answers,
                }
                comments.push(comment);
            }
        }
        state.comments = comments;
    },
    async addComment(state, comment){
        console.log(comment);
        if(comment.answerCommentId !== null){
            console.log('answer comment');
            for(let i=0; state.comments.length > i; i++){
                if(state.comments[i].id === comment.answerCommentId){
                   await state.comments[i].answers.push(comment);
                }
            }
        } else {
            await state.comments.push(comment);
        }
    }
}