import { landmark } from "./landmarks.js"
import { getLandmark } from "./landmarkData.js"

export const landmarkList = () => {
    const landmarks = getLandmark();
    const contentElement = document.querySelector(".landmark_card")
        let finishHTMLRepresentations = "";
        for (const australiaLandmark of landmarks) {
            finishHTMLRepresentations += landmark(australiaLandmark);
        }
        console.log("finishHTMLRepresentations", finishHTMLRepresentations)
        contentElement.innerHTML += finishHTMLRepresentations;
}
