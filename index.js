// our global and constant var that will contain questions, answers, the correct answer, description about the answer, a related image, source of the correct answer, and an alt tag
const QUIZ = { 
  // our quiz app with literal array
  questions: [ 
  // inside literal array...
      //object within the array
      {
        question: 'Prior to the name \'Middle East\', what was the region commonly referred as in Europe?',
        answers: ['Near East','Jabal Amil', 'Byzantine Empire', 'Persia'],
        correctAnswer: 0,
        paragraph: 'Prior to the name \'Middle East\' the region was commonly referred to as the \'Near East\'. The modern term is believed to derive from the British India Office.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Middle_East_%28orthographic_projection%29.svg/553px-Middle_East_%28orthographic_projection%29.svg.png',
        sources: '<a href="https://en.wikipedia.org/wiki/Near_East" target="_blank">SOURCES: Near East</a>',
        altinfo: 'Image of the Middle or Near east'
      },
      {
        question: 'How many nations and major territories are referenced as part of the Middle East?',
        answers: ['57','17', '32', '6', '8'],
        correctAnswer: 1,
        paragraph: 'The Middle East commonly refers to the following nations... Bahrain, Cyprus, Egypt, Iran, Iraq, Israel, Jordan, Kuwait, Lebanon, Oman, Palestine, Qatar, Saudi Arabia, Syria, Turkey, United Arab Emirates, and Yemen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Middle_east.jpg',
        sources: '<a href="https://en.wikipedia.org/wiki/Middle_East#Territories_and_regions" target="_blank">SOURCES: Middle East Territories and Regions</a>',
        altinfo: 'Image of Middle East territories'
      },
      {
        question: 'Prior to the rise of Islam, what were the dominant forces in the Middle East?',
        answers: ['Lakhmids and Ghassanids','Egyptians and Selucids', 'Byzantine\/Eastern Roman Empire and the Sassanids\/Parthians', 'Syrians and Babylonians', 'Klingons and Romulans'],
        correctAnswer: 2,
        paragraph: 'The Greek/Persian conflicts carried on well past the days of the Athenians, Spartans, and the Achaemenid (Persian) empire. <br><br>Eastern Rome and its later counterpart the Byzantines continued to battle their arch rivals through the - The Parthians (a Hellenistic-Iranian dynasty) and the Sassanids (most powerful Iranian dynasty since the Achaemenids).<br><br> Their fued reached its climax during the Byzantine–Sasanian War of 602–628. The conflict was so catastrophic that it left both Empires in a weakened state they would not recover from, allowing their neighboring Arab states to break, and bring about the rise of Islam throughout both empires.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Piero_della_Francesca_021.jpg/2560px-Piero_della_Francesca_021.jpg',
        sources: '<a href="https://en.wikipedia.org/wiki/Byzantine%E2%80%93Sasanian_War_of_602%E2%80%93628" target="_blank">SOURCES: Byzantine Sassanian War of 602-628</a>',
        altinfo: 'Image from the Byzantine Sassanid War of 602 to 628'
      },
      {
        question: 'What was the official language of the Byzantine Empire?',
        answers: ['Roman','Latin','Byzantinese','Greek','Arabic','Persian'],
        correctAnswer: 3,
        paragraph: 'The Eastern Roman and the later Byzantine empire predominantly spoke Greek, However this should not be taken to regard the Byzantines as a Greek empire. This was a multicultural society with predominantly Non-Greek contributors.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Byzantine_agriculture.jpg',
        sources: '<a href="https://en.wikipedia.org/wiki/Byzantine_Empire#Language" target="_blank">SOURCES: Byzantine Empire languages</a>',
        altinfo: 'image of Byzantine Greek scripture'
      },
      {
        question: 'How many centuries did the Islamic Golden Age last?',
        answers: ['Two centuries','Nine centuries', 'Around fifteen centuries', 'Less than one-hundred years' ,'Around five centuries'],
        correctAnswer: 4,
        paragraph: 'The Golden age of Islam spanned roughly 500 years from the time of Mohammad, and through three major caliphates (Muslim rulers) - The Rashidun, Umayyad, and Abbassid Caliphates. <br><br> The Arab conquest suddenly saw Anatolian Greeks, Persian, and Arab populations living under one empire. In an attempt to adapt, Arab Governance required a fusion of their predecessors systems and technology. <br><br> This, along with a relative level of stability not experienced in the region since the Achaemenid Persian empire, allowed the region to flourish with a wealth of new inventions, and improvements on quality of life.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Map_of_expansion_of_Caliphate.svg/900px-Map_of_expansion_of_Caliphate.svg.png',
        sources: '<ul><li><a href="https://en.wikipedia.org/wiki/Islamic_Golden_Age" target="_blank">SOURCE: Islamic Golden Age</a></li><li><a href="https://www.timemaps.com/civilizations/islamic-caliphate/" target="_blank">SOURCE: The Islamic Caliphate</a></li></ul>',
        altinfo: 'Image of the Islamic Empires under the Caliphates'
      },
      {
        question: 'What were the names of the \'Gunpowder Empires\' Who were predominantly Muslim?',
        answers: ['Dirks, Mechis, and Saladis','Seljuk, Timurids, and Ottomans', 'Kurds, Azeris,Uzbeks', 'Ottomans, Safavids, and Mughals'],
        correctAnswer: 3,
        paragraph: 'Although the Turks replaced the Greeks as the dominant ethnic group in Anatolia, the geopolitical rivalry continued with the Persians in a similar fashion to the regions pre-Islamic status. <br><br> However this time, two sects of Islam were fighting for dominance. The Sunnis (through the Ottomans), and the Shia (through the Safavid Persians). The Mughal empire ruled a large portion of the Indian subcontinent, and while the ruling family of Turkic ancestry spoke Persian, they were a Sunni group that ruled over an incredibly diverse society.<br><br> It is said that the Ottomans and Safavids rivaled the European Empires at their height, with Isfahan being compared to Paris and London. <br><br> Eventually, the empires ruined each other, with Nader Shah overthrowing his own Safavid rulers, and sacking the Mughal empire. His actions in modern day India paved the way for the British Empire to easily conquer the region.',
        image: 'http://apworldhistory2012-2013.weebly.com/uploads/9/9/9/6/9996001/3493505_orig.jpg?357',
        sources: '<a href="https://en.wikipedia.org/wiki/Gunpowder_Empires" target="_blank">SOURCES: Wikipedia - Gun Powder Empires</a>',
        altinfo: 'Images of the Ottoman, Safavid, and Mughal Empires'
      },
      {
        question: 'What percentage of the Muslim population is Shia(Shiite)?',
        answers: ['50%','10%','30%','2%'],
        correctAnswer: 1,
        paragraph: 'Shia make up 10-13% of the world\'s muslim population. Mostly centralzied in the Middle east. In the region, they roughly make up 50% of the population.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mirror_writing2.jpg/1920px-Mirror_writing2.jpg',
        sources: '<a href="http://www.bbc.com/news/world-middle-east-25434060" target="_blank">SOURCES: World Middle East Population</a>',
        altinfo: 'Image of Shia Islam written in Arabic caligraphy'
      },
      {
        question: 'What are the top five languages in the Middle East?',
        answers: ['Arabic, Hebrew, Greek, Egyptian, Persian', 'Arabic, Greek, Sudanese, Turkish, Hebrew', 'Arabic, Hebrew, Turkish, Kurdish, Persian'],
        correctAnswer: 2,
        paragraph: 'Arabic is by far the most popular language in the Middle East, followed by Turkish, Persian, and Hebrew.<br><br>While Arabic and Hebrew are part of the semitic branch of languages, Turkish falls under Turkic (formerly labeled an Uralaltaic), and Kurdish/Persian falling under Indo-European.',
        image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/1/9/1420823284975/fe0733eb-8981-441d-9323-a9c635347ab8-2060x1236.jpeg?w=1300&q=20&auto=format&usm=12&fit=max&dpr=2&s=684e494384fbb38e71453f9dbf828142',
        sources: '<ul><li><a href="https://en.wikipedia.org/wiki/Middle_East#Languages" target="_blank">SOURCE: Wikipedia - Middle East languages</a></li><li><a href="https://en.wikipedia.org/wiki/Semitic_languages" target="_blank">SOURCE: Semitic Languages</a></li><li><a href="https://en.wikipedia.org/wiki/Indo-Iranian_languages" target="_blank">SOURCE: Indo-Iranian(Aryan) languages</a></li><li><a href="https://en.wikipedia.org/wiki/Turkic_languages" target="_blank">SOURCE: Turkic Languages</a></li></ul>',
        altinfo: 'Indo-European Language Tree'
      },
      {
        question: 'Aside from Israel, which country is home to the second largest population of Jews in the region?',
        answers: ['Iraq','Turkey','Lebanon','Iran','Palestine'],
        correctAnswer: 3,
        paragraph: 'The connections between Jews and Iranians stems back to the beginnings of the first Persian empire under Cyrus The Great. Cyrus freed the Jews of Babylon and made Palestine a vassal state under Jewish rule and law. <br><br> Cyrus and his three heirs are referenced in the old testament, and before Jesus was often believed to be the Mesiah in certain sects.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Rashid-al-Din_Hamadani.jpg/1024px-Rashid-al-Din_Hamadani.jpg',
        sources: '<ul><li><a href="https://en.wikipedia.org/wiki/Persian_Jews" target="_blank">SOURCE: Persian Jews</a></li><li><a href="https://en.wikipedia.org/wiki/Iranian_Jews_in_Israel" target="_blank">SOURCE: Iranian Jews in Israel</a></li><li><a href="https://en.wikipedia.org/wiki/Cyrus_the_Great#cite_note-15" target="_blank">SOURCE: Cyrus The great as the mesiah</a></li></ul>',
        altinfo: 'Picture of a famous Iranian-Jewish Figure head during the Islamic period'
      }
    ]
}

//Global variables below hold the current Question the user is on. How many correct and incorrect scores they have, how many games they've played, total Questions, and the score of the last game they played if they've played before.
var currentQ = 0;
var correctScore = 0;
var inCorrectScore = 0;
var gamesplayed = 1;
var totalQ = QUIZ.questions.length;
var lastPercentageScore = 'N/A';

//SetupQuiz initiates a call to startQuiz under the event a user clicks to Start the Quiz
function setupQuiz() {
  console.log('`startQuiz` ran');
  $('.js-start-button').on('click', startQuiz);
}

//called by the setupQuiz - startQuiz hides the start button by adding the js-hidden attribute, clears the paragraph under our header, and calls the renderQuiz
function startQuiz(event) {
  //traversal and manipulations. When you're traversing you use selectors and when you're manipulating you use class names
    $('.js-start-button').toggleClass('js-hidden');
    $('p').html('')
    renderQuiz();
  }

//When the renderQuiz is called, it will remove the js-hidden class attribute from the div with the quizDisplay attribute and then call the buildQuiz function. Finally, it will call the checkQuiz function.
function renderQuiz() {
  console.log('`renderQuiz` ran');
  //find quizDisplay, and then use buildQuiz to build the quiz
  //we want to probably have our for loop here
  $('.quizDisplay').toggleClass('js-hidden').html(buildQuiz());
  //checkResults function here
  checkResults();
}

//When buildQuiz runs, it will generate our questions in an html form with radio buttons.
function buildQuiz() {
  console.log('`buildQuiz` ran');
  var answers = QUIZ.questions[currentQ].answers.map(function (answer,index,answers) {
    return `<label><input id='radio_${index}' type='radio' name='answer' value='${index}'  required>${answer}</label><br>`});
    // possibly put line 65 and part of 83 in its own function
   return `<div class=\"currentQuestion col-12\">Questions: ${currentQ+1} out of ${totalQ} </div> <div class=\"correctScoreboard col-6\">correct: ${correctScore} </div> <div class=\"inCorrectScoreboard col-6\"> incorrect: ${inCorrectScore}</div>
    <fieldset>
      <form role="search" id="question-form">
        <legend>${QUIZ.questions[currentQ].question}</legend>
        ${answers.join('')}
        <input class="js-submit-button button" type="submit" value="Final Answer">
      </form>
    </fieldset>
    `;
}

//checkResults checks the results of the form when the submit button is chosen, and returns the results of the currentQ.
function checkResults() {
  console.log('`checkResults` ran');
  $('form').submit(function (event) { 
    event.preventDefault();
    console.log('`event` ran');
    var answerChosen = parseInt($("input[name='answer']:checked").val(), 10);
    console.log(answerChosen);
    var currentQuestion = QUIZ.questions[currentQ];
    var correctAnswerIndex = currentQuestion.correctAnswer;
    //trinary condition..YAS
    var status = (answerChosen === correctAnswerIndex)?'CORRECT!':'WRONG!';
    //iterate here so it doesn't count after results are
    (answerChosen === correctAnswerIndex)?correctScore++:inCorrectScore++;
    var resultOfCurrentQ = "<div class=\"correctScoreboard col-6\">correct: " + correctScore + "</div><div class=\"inCorrectScoreboard col-6\">Incorrect: " + inCorrectScore + "</div><div class=\"content\"> <h3>" + status + "</h3><button class='button js-next-button' type='button'>Next Question</button><div class=\"col-6\"><p>" + currentQuestion.paragraph + "</p> <p>" + currentQuestion.sources + "</p></div> <div class=\"col-6\"> <img alt=\"" + currentQuestion.altinfo + "\" class=\"\" src='" + currentQuestion.image + "'/></div></div>";
    
    console.log(correctAnswerIndex + ' ran');
    if (answerChosen === correctAnswerIndex) {
      console.log('`IF statement` ran');
      // correctScore++;
      console.log(correctScore);
      //dont use return, use something to generate html with currentQuestion.paragraph, currentQuestion.image. sometihng like $('p').html... better to use the attirbute. We may also want to add
      $('.quizDisplay').html(resultOfCurrentQ);
      $('.js-next-button').on('click', prepNextQ);
    }
    else {
      console.log('`ELSE statement` ran');
      // inCorrectScore++;
      console.log(inCorrectScore);
      $('.quizDisplay').html(resultOfCurrentQ);
      $('.js-next-button').on('click', prepNextQ);     
    }
  });
}

//called by the checkResults function, prepNextQ prepares the next question if there is one, calling the BuildQuiz method. If not, it calls the results method.
function prepNextQ() {
  //we want this function to clean up html, iterate currentQ, check if we're at the end of our questions, and if not call buildQuiz
  console.log('`prepNext` ran');
  var numberofQuestions = QUIZ.questions.length-1;
  console.log(numberofQuestions);
  if (currentQ < numberofQuestions) {
    currentQ++;
    console.log(currentQ);
    $('.quizDisplay').html(buildQuiz());
    checkResults();
  }
  else {
    console.log('END OF GAME');
    results();
    //we'll want to show the score, and give them their results
  }
  
}

//Tallys users score, presents their score, shows them the scrore of their last game if they've played. Also calls on the restartQuiz should they decide to play again.
function results () {
  var percentageScore = ((correctScore/9)*100).toFixed(2);
  $('h1').html('Wasn\'t that Mid-Easy? Final Score');
  $('.quizDisplay').html("<div class=\"correctScoreboard col-6\">correct:  " + correctScore + "</div> <div class=\"inCorrectScoreboard col-6\"> incorrect: "+ inCorrectScore + "</div><div class=\"col-12\"><button class='button js-restart-button' type='button'>Let's try this again</button></div><div class=\"percentstyle col-12\">Percentage: " + percentageScore  + "% </div><div class=\"percentstyle col-12\">Games Played: " + gamesplayed + "</div><div class=\"percentstyle col-12\">Last Score: " + lastPercentageScore + "</div> <div class=\"content\"> <span>  You are...</span>" + percentile(percentageScore));
  lastPercentageScore = percentageScore + '%';
  $('.js-restart-button').on('click', restartQuiz);
}

//determines the percentile of the users score, and returns it for results to display
function percentile (percentageScore) {
  console.log(percentageScore);
  /*var roundedScore = function(percentageScore) {
    return (percentageScore <= 30)?0
    :(percentageScore <= 60)?1
    :(percentageScore <= 80)?2
    :(percentageScore <= 90)?3
    :4;
  };*/
  var roundedScore;
  if(percentageScore <= 30) { roundedScore = 0 }
  else if(percentageScore <= 60) { roundedScore = 1 }
  else if(percentageScore <= 80) { roundedScore = 2 }
  else if(percentageScore <= 90) { roundedScore = 3 }
  else { roundedScore = 4 }
  console.log(roundedScore);
  // 30 60 80 90 100
  // (answerChosen === correctAnswerIndex)?'CORRECT!':'WRONG!';
  switch (roundedScore) {
  	case 0:
    	  return "<h2>The Average Joe</h2><div class=\"col-6\"><p><span>If you guess you may get a few things about the Middle East right, but it's probably safer to not ask for directions there on a map.</span></p></div><div class=\"col-6\"><img alt=\"Image of an avarge joe\" src=\'http://epguides.com/AverageJoe/logo.jpg\'/></div>";
	  case 1:
    	  return "<h2>Balian of Ibelin</h2><div class=\"col-6\"><p><span>You played an important historical role, but have muddled in quite a few stories over the centuries(see image). You may have not totally related your neighbors east of Jerusalem, but you understand them better than most.</span></p></div><div class=\"col-6\"><img alt=\"Image of Orlando Blume as Balian of Ibelin\" src=\'http://img05.deviantart.net/b6da/i/2006/047/c/5/balian_of_ibelin_by_pbozproduction.jpg\'/></div>";
    case 2:
        return "<h2>Abbas the Great</h2><div class=\"col-6\"><p><span>Early in your life you found yourself at the wrong place at the wrong time, but you've learned from your mistakes and road them into greatness. Your Knowledge of the region is as diverse as the empire you ruled.</span></p></div><div class=\"col-6\"><img alt=\"Image of Abbas The Great of Persia\" src=\'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ShahAbbasPortraitFromItalianPainter.jpg/230px-ShahAbbasPortraitFromItalianPainter.jpg\'/></div>";
    case 3:
        return "<h2>Saladin</h2><div class=\"col-6\"><p><span>You are brilliant tactician navigating turbulent times. Your secret is knowing your people and enemies better than they know themselves.</span></p></div><div class=\"col-6\"><img alt=\"Statue of Saladin in Damascus\" src=\'https://media-cdn.tripadvisor.com/media/photo-s/04/04/aa/9e/saladin-selahedin-statue.jpg\'/></div>";
    case 4:
        return "<h2>Nader Shah</h2><div class=\"col-6\"><p><span>Some call you the second Alexander, Napolean of Persia, or \'The Last Asian Conqueror.\' Whatever the case, you mercilessly slayed your enemies. Just like you did with this quiz!</span></p></div><div class=\"col-6\"><img alt=\"Image of Nader Shah - the last Asian Conqueror\" src=\'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NaderShahPainting.png/250px-NaderShahPainting.png\'/></div>";
  }
}

//cleans up correct, incorrect, and current question. Also adds to the games played variable before resetting the hidden tags, and the h1 title.
function restartQuiz() {
  console.log('`restartQuiz` Ran');
  correctScore = 0;
  inCorrectScore = 0;
  currentQ = 0;
  gamesplayed++;
  $('.js-start-button').toggleClass('js-hidden');
  $('.quizDisplay').toggleClass('js-hidden');
  $('h1').html('The Mid-Easy Quiz');
}

function quizHandler() {
  setupQuiz();
}

$(quizHandler);