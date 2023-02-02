import { useParams } from "react-router-dom"

export default function TrackedSummary() {

const { username } = useParams() 
 

    return (
    <div>
        <h3 className="mt-4">Mental wellbeing summary of {username}</h3>
    </div>
    )
}