/* stuff from bootstraps website
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
*/

var root = document.getElementById('root');

const App = (props) => {
    return React.createElement('div', {className: "form-group form-check"},
        [
            //email
            React.createElement('label', 
                {
                    htmlFor: "exampleInputEmail"
                },
                "Email Address"),
            React.createElement('input', 
                {
                    className: "form-control",
                    type: "email",
                    id: "exampleInputEmail1",
                    placeholder: "Enter email"
                },
                
            ),
                    //Password
            React.createElement('label', 
                {
                    htmlFor: "exampleInputPassword1"
                },
                "Zip Code"),
            React.createElement('input', 
                {
                    className: "form-control",
                    type: "zip",
                    id: "exampleInputPassword1",
                    placeholder: "Enter Zip Code"
                },
                
            ),
                
            //button
            React.createElement('input',
                { 
                    className: "form-check",
                    type: "submit",
                    class: "btn btn-success btn-lg btn-block"
                },
            ),
        ]  
    );
};

ReactDOM.render(React.createElement(App), root);