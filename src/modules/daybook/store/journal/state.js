export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //546545464546
            date: new Date().toDateString(), //sat 23, july
            text: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000, //546545464546
            date: new Date().toDateString(), //sat 23, july
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000, //546545464546
            date: new Date().toDateString(), //sat 23, july
            text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            picture: null
        }
    ]

})