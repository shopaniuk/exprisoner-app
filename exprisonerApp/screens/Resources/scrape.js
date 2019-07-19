const request = require('request');
const cheerio = require('cheerio');
const rp = require('request-promise');

let info = [];

let options = {
    url: `https://helpforfelons.org/reentry-programs-ex-offenders-state/`,
    json: true
}


/*
The following request makes an Async Ajax call to HFF.com.  I then parse the HTML using CSS selectors and helper methods
*/
request('https://helpforfelons.org/reentry-programs-ex-offenders-state/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        // Set up cheerio HTML parser, $ is the variable 
        const $ = cheerio.load(html);
        // The "strong" is a css <tag> filter.  Collects all <Strong> tagged info. 
        // Searches like this only work for cheerio objects
        const strongTag = $("strong");
        // Hardcoded to dodge bad website design on HFF.coms part 
        for(let i = 1; i < 53; i++) {
            if (4 <= (strongTag[i].children[0]['data']).length && (strongTag[i].children[0]['data']).length <= 15) {
                // This conditional effectively captures the state names.. Still Missing Rhode Island?
                // Created workaround for Rhode Island

                // Following if conditional dodges Alabama's weird formatting issue
                let links;
                if(i == 1) {
                    links = assignLinks(strongTag[i].parent.next.next, []);
                } else {
                     links = assignLinks(strongTag[i].parent.next, []);
                }
                const state = (strongTag[i].children[0]['data']).trim();
                // The following creates a library with states as keys and their linked objects as values. 
                // Either going to send this to the cloud or store locally? 
                // Might want to right some logic in that runs this script on app start and stores the dictionary local storage
                info[state] = links;
                
                
            }
        }
    }
    console.log(info);
    console.log(Object.keys(info));
});

/*
The following Helper takes in the <div> tag object that is the parent of a found state tag.  
ex. strongTag[i] = "Alabama" -> curr = the div tag surrounding Alabama.
I do this so I can iterate through the DOM stack and find the links that I need
Is it great? Maybe not but it works so smd

@param - curr: The div tag surrounding our Strong tag from earlier
@param - linkList: the object array that I am storing our Json object in
*/

function assignLinks(curr, linkList) {
    // Initialize the fields of our Json obj
    let url, title, desc, linkListNode;
    // Pass in parent.next.. Should start with a non <h3> tag
    // If cond checks the tag.  If its nonexistant or not a <p> tag return the list
    // This could cause me to miss some important information.  I may change this logic
    if(curr == null || curr.name != 'p') {
        // Assumes that the parse has been finished. Returns the list 
        // Don't record Don't recur
        return linkList;
    // Else if (it isn't structured to include a url href link) -> Skip it
    } else if (!curr.children[0] || !curr.children[0].attribs || !curr.children[0].attribs.href ) {
        assignLinks(curr.next, linkList);
    // Else (It is structured right) -> Collect the JSON Obj
    } else {
        // Hard-coded values because I am weak.
        url = (curr.children[0].attribs.href);
        title = (curr.children[0].children[0].data);
        // Terenary: if the obj has a description - Made for edge case
        desc = (curr.children[1] && curr.children[1].data) ? curr.children[1].data : null ;
        // Assign a default desc so .replace works
        if(desc === null) {
            desc = " DEFAULT STRING "
        }
        desc = desc.replace(/\W /g, '').replace("–","").trim();
        //  Here we use the JavaScript prop syntax to assign fields as variables
        linkListNode = {
            url, title, desc
        };
        // Push that link to the List 
        linkList.push(linkListNode);
        // recur and move forward
        assignLinks(curr.next, linkList);
    }
    // Return the LinkList of the current state
    return linkList;

    
}