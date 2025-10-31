export default function Button({text, value, change}) {

    function verify(){
        switch(text){
            case 'Decrement':
                return change(value -1)
            case 'Reset':
                return change(0)
            case 'Increment':
                return change(value +1)
        }
    }

    return <button onClick={verify}>{text}</button>
    
}