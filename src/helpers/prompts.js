 export const createChatGPTPrompt = (promptOptions)=> {
    const { numResults, prompt, prompt_answer, about, age, sign, dating_goal, results,numWords } = promptOptions;
    
    let promptString = `Give a response to: '${prompt}: ${prompt_answer}.' `;
    
    if (about) {
        promptString += `to someone who is ${about}. `;
    }
    
    if (age) {
        promptString += `*Who is ${age} years old. `;
    }
    
    if (sign) {
        promptString += `*Who's zodiac sign is ${sign}. `;
    }
    
    if (dating_goal) {
        promptString += `*who is looking for ${dating_goal} dating. `;
    }
    
    if (results.length > 0) {
        promptString += `--- give ${numResults || 1} results in each of these styles: ${results.join(', ')}. Have each be about ${numWords || 50} words`;
    }
    
    return promptString;
}

export const PROMPT_OPTIONS = {
    prompt: 'The key to my heart is',
    prompt_answer: 'seeking out meaningful expierences.  I love going to new places, seeing and trying new things and deep conversations.',
    about: 'is good at  juggling',
    numResults:2,
    age: 33,
    numWords:50,
    sign: null,
    dating_goal: 'serious',
    results: [
        'be smart',
        'be confident',
        'be kosher',
        'be ssbbw',
        'be interesting',
        'be awkward',
        'be positive and encouraging',
        'be flirty',
    ]
}

console.log(createChatGPTPrompt(PROMPT_OPTIONS));
