var quotes = [
    '\"Waste no more time arguing what a good man should be. Be One.\"\n\n-Marcus Aurelius',
    '\" When we are no longer able to change a situation, we are challenged to change ourselves.\"\n-Viktor Frankl',
    '\"How does it help to make troubles heavier by bemoaning them?\"\n-Seneca',
    '\"If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, He was ignorant of my other faults, else he would have not mentioned these alone.\"\n\n-Epictetus',
    '\"Many people die at the age of 25, but their bodies are not buried until 75.\"\n\n-Benjamin Franklin',
    '\"It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.\"\n-Theodore Roosevelt',
    '\" Do not explain your philosophy. Embody it.\"\n-Epictetus',
    '\"Life is very short and anxious for those who forget the past, neglect the present, and fear the future.\"\n-Seneca',
    '\"What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.\"\n-Viktor Frankl',
    '\" Do what you can, with what you have, where you are.\"\n-Theodore Roosevelt',
    '\" Knowing what is right does not mean much unless you do what is right. \"\n-Theodore Roosevelt',
    '\"A man may imagine things that are false, but he can only understand things that are true.\"\n-Isaac Newton',
    '\"  The essence of philosophy is that a man should live so that his happiness depends as little as possible from external causes.\"\n-Epictetus',
    '\" He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.\"\n-Epictetus',
    '\" A vote is like a rifle: its usefulness depends upon the character of the user.\"\n-Theodore Roosevelt',
    '\"Choose not to be harmed and you won\’t feel harmed. Don not feel harmed and you haven not been.\"\n-Marcus Aurelius',
    '\" To educate a person in the mind but not in morals is to educate a menace to society.\"\n-Theodore Roosevelt',
    '\"The best revenge is not to be like your enemy.\"\n-Marcus Aurelius',
    '\"Be who you are and say what you feel, because those who mind do not matter and those who matter don\'t mind.\"\n-Bernard M. Baruch',
    '\" Happiness depends upon ourselves.\"\n-Aristotle',
    '\"When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.\"\n-Lao Tzu',
    '\"  Wealth consists not in having great possessions, but in having few wants.  \"\n-Epictetus',
    '\" If a man knows not which port he sails, no wind is favorable.\"\n-Seneca',
    '\"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.\"\n-Marcus Aurelius',
    '\"Be tolerant with others and strict with yourself.\"\n-Marcus Aurelius',
    '\" Educating the mind without educating the heart is no education at all.\"\n-Aristotle'
]


function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}