import * as React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer id={'footer'}>
                <div className={'container'}>

                    <div className={'row justify-content-center'}>
                        <div className={'col col-12 col-md-6'}>
                            <p><a href="https://github.com/celestiaorg/modularsummit.dev" target={'_blank'}>Suggest edits to this website on GitHub&#x1F855;.</a></p>
                        </div>
                    </div>

                    <div className={'row justify-content-center copyright'}>
                        <div className={'col col-12 col-md-6 text-center'}>
                            <p>Website designed with <i className={'icon-heart'}/> by <a href="https://designatives.com">Designatives</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
