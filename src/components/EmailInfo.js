import React, {Component} from 'react'


export default class EmailInfo extends Component {

    render() {
        return (
            <div><h2>Email Preferences</h2>
                <form style={{textAlign: 'left'}}>
                    <div class="field">
                        <div class="ui toggle checkbox">
                            <input type="checkbox"></input>
                                <label style={{color: 'white'}}>Email me updates on donations</label>
                        </div>
                        </div>
                    <br></br><br></br>
                    <div class="field">
                        <div class="ui toggle checkbox">
                            <input type="checkbox"></input>
                            <label style={{ color: 'white' }}>Contact me with promotions for new projects</label>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div class="field">
                        <div class="ui toggle checkbox">
                            <input type="checkbox"></input>
                            <label style={{ color: 'white' }}>Sell my data</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}