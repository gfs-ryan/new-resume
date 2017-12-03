import ReactDOM from 'react-dom'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'

let getResumePath = () => {
    if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) === -1) {
        return './public/resume.json'
    }
    return './public/resume.example.json'
}

function getNavigation() {
    return {
        home: 'Home',
        about: 'About',
        work: 'Work',
        education: 'Education',
        skill: 'Skills',
        portfolio: 'Portfolio',
        testimonials: 'References'
    }
}

ReactDOM.render(
    Routes.get({
        resumePath: getResumePath(),
        navigation: getNavigation()
    }),
    document.getElementById('app'))
registerServiceWorker()
