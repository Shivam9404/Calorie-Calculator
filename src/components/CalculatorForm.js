import React, { useState } from 'react';

function CalculatorForm () {
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    return(
        <div>
            <form>
                    <input
                    name="age"
                    type = "number"
                    placeholder='age'
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    required
                /><br/>
                
                    <input
                    name="height"
                    type = "number"
                    placeholder='height (cm)'
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    required
                /><br/>

                    <input
                    name="weight"
                    type = "number"
                    placeholder='weight (kg)'
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    required
                /><br/>

                    <label for="gender">Gender</label><br/>
                    <select name='gender'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br/>
                    <label for="activity">Activity</label><br/>
                    <select name="activity">
                        <option value="sedentary">Sedentary(1-2 days/week)</option>
                        <option value="lightly">Lightly Active(2-3 days/week)</option>
                        <option value="active">Active(4-5 times/week)</option>
                        <option value="very">Very Active(6 days/week)</option>
                    </select><br/>
                    <label for="goal">Goal</label><br/>
                    <select name="goal">
                        <option value="maintain">Maintain Weight</option>
                        <option value="lose">Lose Weight</option>
                        <option value="gain">Gain Muscle</option>
                    </select><br/>
                    <input name="exerciseDays" type="number" placeholder="Exercise Days/week" required /><br/>
                    <button type="submit">Calculate</button>
            </form>
        </div>
        
    )
}

export default CalculatorForm;