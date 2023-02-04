import './GetStarted.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function GetStarted(){

    const [recomTags, setRecomTags] = useState(['mountain', 'swimming']);

    return (
        <div className="get-started-background">
            <div className="get-started-container">
            <h1 className="get-started-appname">Weekend Trip Recommender</h1>
            <div className='get-started-form'>
            <p className="get-started-title">Welcome Lets Get You Started</p>
            <p className="get-started-fadetext">You can always change them later</p>

            <Form>
                <Form.Group className="mb-3 get-started-displayname">
                <Form.Label>Display Name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>

                <p>Find your Interests</p>

                {recomTags.map((element, index) => (
                    <div key={`${element}`} className="mb-3">
                    <Form.Check
                        inline
                        label={element}
                        name="group1"
                        type="checkbox"
                    />
                    {/* {element} */}
                    </div>
                ))}

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </div>
            
      
        </div>

        </div>
        
  
    );
}

export default GetStarted;