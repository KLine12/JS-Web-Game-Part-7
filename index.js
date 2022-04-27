// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
//await npc.walkEast(2000)

moveNPC();

async function moveNPC(){
    await npc.walkNorth(1400)
    await npc.walkEast(1200)
    await npc.walkSouth(300)
    await npc.walkEast(1500)
    await npc.walkSouth(1500)
    await npc.walkWest(2700)
    await npc.walkNorth(400)
}

// Bonus
// If you have time, below are some ideas to develop your mastery of async and await:

// Loop the track, so once the character finishes, it starts to circle around the screen again.
// You may have done this before in a previous lesson, but now that you are using async and await, try utilizing a while loop to implement this behavior.
// Read about generator functions in MDN's documentation. The generator function is another block on which async and await are built. While it is uncommon to use the generator function syntax directly, it is a very interesting tool for customizing your functions.
// Acceptance Criteria
// When opening the game in the browser, the green character walks around the screen on the intended track and returns to its initial position.
// When viewing newNonPlayableCharacter.js, function moveNPC() must exist.
// When viewing newNonPlayableCharacter.js, function moveNPC() must be an async/await function that moves the character along the intended track.
// Before submitting, make sure you do a self review of your code, check for formatting, spelling, include comments in your code, and ensure you have a healthy commit history.

// Make sure to submit your github repository link on the submission page.




//npc.walkSouth()

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)