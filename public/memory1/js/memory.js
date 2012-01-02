/*
 * Main javascript functionality for the memory game
 */


/*
 * Constants
 */
const MAX_ROWS = 4; /* default and max number of rows */
const MAX_COLS = 4;  /* default and max number of columns */
const CARD_PADDING = 8; /* default padding between cards */
const IMG_WIDTH_HEIGHT = 100;
/*const IMG_WIDTH_HEIGHT = 200; */

/* This is an array of all the pictures available for the game... it
 * must be half the number of cards in the game
 */
/*const g_imageArray = ["imgs/triangle200-200.png", "imgs/tree200-200.png",
	  			    "imgs/spinner200-200.png", "imgs/stripes200-200.png",
				    "imgs/circle200-200.png", "imgs/fire200-200.png",
				    "imgs/colors200-200.png", "imgs/flower200-200.png"];
*/
const g_imageArray = ["imgs/triangle100-100.png", "imgs/tree100-100.png",
	  			    "imgs/spinner100-100.png", "imgs/stripes100-100.png",
				    "imgs/circle100-100.png", "imgs/fire100-100.png",
				    "imgs/colors100-100.png", "imgs/flower100-100.png"];
var g_indxArray = new Array(MAX_ROWS * MAX_COLS);
var g_selectedCards = new Array(2);
var g_cardsRemoved = 0;

/*
 * Class definition for one card in the game
 */
// Card Constructor class definition
function Card(r, c)
{
	var id = (r * MAX_COLS) + c;

	// Every card needs a container to manage it within the DOM
	this.divContainer = document.createElement("div");
	this.divContainer.className = "card";

	// Set row and column numbers so they can be accessed in event functions
	this.divContainer.row = r;
	this.divContainer.col = c;
	this.divContainer.id = id;
	this.divContainer.imgIdx = g_indxArray[id];


	/* By creating containers that both start with 'face' we can apply
	 * styles to any face, but we also specify specifics about the face
	 * (front or back) so we can apply styles independently as well
	 */
	this.divContainer.divFront = document.createElement("div");
	this.divContainer.divFront.className = "face front";
	this.divContainer.divBack = document.createElement("div");
	this.divContainer.divBack.className = "face back";

	this.divContainer.frontImgElement = document.createElement("img");
	this.divContainer.backImgElement = document.createElement("img");

	// Here is where we set the image for the element... later this will
	// have an algorithm to accompany it... for now just one image.
	// Please don't use transparency images, as you will see the back
	// through the front image for any transparent sections
	//this.divContainer.frontImgElement.src = "imgs/triangle200-200.png";
	this.divContainer.frontImgElement.src = g_imageArray[this.divContainer.imgIdx];
	/*this.divContainer.backImgElement.src = "imgs/tmp200-200-back.png"; */
	this.divContainer.backImgElement.src = "imgs/tmp100-100-back.png";

	this.divContainer.appendChild(this.divContainer.divFront);
	this.divContainer.appendChild(this.divContainer.divBack);
	this.divContainer.divFront.appendChild(this.divContainer.frontImgElement);
	this.divContainer.divBack.appendChild(this.divContainer.backImgElement);

	// Add an event listener for the onclick event... each card will have
	// the same handler function
	this.divContainer.addEventListener("click", cardSelected, false);

	return this.divContainer;
}


/*
 * Global class Memory, to hold all the global config of the game.
 */
// Memory Constructor class definition.
function Memory(boardId, numRows, numCols)
{
	var i = 0;
	var j = 0;
	var numCards = numRows * numCols;
	var card = 0;
	var randNum = 0;

	this.boardId = boardId;

	this.boardId.style.left = num2Px(0);
	this.boardId.style.top = num2Px(0);
	this.boardId.style.height = num2Px((IMG_WIDTH_HEIGHT * numRows) + (CARD_PADDING * (numRows + 1)));
	this.boardId.style.width = num2Px((IMG_WIDTH_HEIGHT * numCols) + (CARD_PADDING * (numCols + 1)));
	this.numRows = numRows;
	this.numCols = numCols;

	// Initialize selected cards
	g_selectedCards[0] = null;
	g_selectedCards[1] = null;

	// Initialize the g_indxArray then setup the image indexes for each card.
	for (i = 0; i < numCards; i++)
	{
		g_indxArray[i] = -1;
	}

	// Setup the imgIdxs array with the indexes each card should used into the
	// global imagesArray for the image on the back of that card.
	for (i = 0; i < numCards; i++)
	{
		card = Math.floor(i / 2);
		randNum = Math.floor(Math.random() * numCards);

		// As we generate a random number if that space is
		// already defined with a card index, we increment down
		// the array until the next open spot is found and we
		// set that with an index.
		for (j = 0; j < numCards; j++, randNum+=1)
		{
			// reset randNum to begining of array
			if (randNum == numCards)
			{
				randNum = 0;
			}
			if (g_indxArray[randNum] == -1)
			{
				g_indxArray[randNum] = card;
				break;
			}
		}
	}


	// Create 2d grid array
	this.grid = new Array(numRows);
	for (i = 0; i < numRows; i++)
	{
		this.grid[i] = new Array(numCols);

		// Create each card.. creation returns a container for the card which
		// is then appended to the playing board
		for (j = 0; j < numCols; j++)
		{
			this.grid[i][j] = new Card(i, j);

			this.boardId.appendChild(this.grid[i][j]);
		}
	}
}



function eventWindowLoaded()
{
	var row = 0;
	var col = 0;
	/* We need a reference to the board so that we can create all of the cards
	 * that will be used for the game. */
	var menu = document.getElementById("menu");
	var menuSep = document.getElementById("menuSeperator");
	var board = document.getElementById("board");
	var memory = new Memory(board, MAX_ROWS, MAX_COLS);

	// Here we set the position of the cards.
	for (row = 0; row < MAX_ROWS; row++)
	{
		for (col = 0; col < MAX_COLS; col++)
		{
			memory.grid[row][col].id = (row * MAX_COLS) + col;

			// first column and row are only half the CARD_PADDING...
			if (col == 0)
			{
				memory.grid[row][col].style.left = num2Px((col * IMG_WIDTH_HEIGHT) + ((col + 1) * (CARD_PADDING / 2)));
			}
			else
			{
				memory.grid[row][col].style.left = num2Px((col * IMG_WIDTH_HEIGHT) + ((col + 0) * CARD_PADDING) + (CARD_PADDING / 2));
			}

			if (row == 0)
			{
				memory.grid[row][col].style.top = num2Px((row * IMG_WIDTH_HEIGHT) + ((row + 1) * (CARD_PADDING / 2)));
			}
			else
			{
				memory.grid[row][col].style.top = num2Px((row * IMG_WIDTH_HEIGHT) + ((row + 0) * CARD_PADDING) + (CARD_PADDING / 2));
			}
		}
	}
}


/* Called when a card is selcted */
function cardSelected()
{
	//alert("cardname:" + this.className  + "   row:" + this.row + "   col" + this.col + "   card index:" + this.id +  "    imgIdx: " + this.imgIdx);

	// Ignore cards that have been removed from the game board...	
	if (this.className == "card reveal remove")
	{
		return;
	}

	// Ignore clicks on the same card
	if (g_selectedCards[0] == this)
	{
	//	alert("Don't choose same card!");
		return;
	}


	if (g_selectedCards[0] == null)
	{
		this.className += " reveal"; // reveal the card
		g_selectedCards[0] = this;
	}
	else if (g_selectedCards[1] == null)
	{
		this.className += " reveal"; // reveal the card
		g_selectedCards[1] = this;
	}
	// the next click needs to put the cards away or hide them again...
	else if (g_selectedCards[0].imgIdx == g_selectedCards[1].imgIdx)
	{
		// Eventually these would change to the "remove" class
		g_selectedCards[0].className += " remove";
		g_selectedCards[1].className += " remove";
		g_selectedCards[0] = null;
		g_selectedCards[1] = null;
		g_cardsRemoved += 2;

		if (g_cardsRemoved >= (MAX_ROWS * MAX_COLS))
		{
			alert("Game Over\n\nClick 'OK' to reload a new game");
			window.location.reload();  // reload the page
		}
	}
	else
	{
		g_selectedCards[0].className = "card";
		g_selectedCards[1].className = "card";
		g_selectedCards[0] = null;
		g_selectedCards[1] = null;
	}


	/*  Using this instead of the above allows you to look at all images without game logic... 
	// Here we are changing the name of the card to add the "reveal" capability to it.  By 
	// doing this we initiate the animations for the reveal class of cards
	if (this.className == "card")
	{
		this.className += " reveal";
	}
	else
	{
		this.className = "card";
	}
	*/
}


/* Registers the init function for the game to populate all 
 * of the elements of the game
 */
window.addEventListener("load", eventWindowLoaded, false);

