const reasons = ["bo jesteś dla mnie najważniejsza", "bo jesteś ze mną zawsze, gdy potrzebuje", "bo masz w sobie coś wyjątkowego", "za Twoją pomoc", "za Twoje poczucie humor", "za Twoją cierpliwość", "bo jesteś moim światem", "za to, że dajesz mi tyle dobrego", "za to, że zawsze mogę na Ciebie liczyć", "za każdy moment razem", "bo zmieniłeś moje życie", "i tak pozostanie", "za motywację do działania", "bo zawsze jesteś po mojej stronie", "za śliczny uśmiech", "za Twoje żarty", "bo jesteś inna niż wszyscy", "za to, że jesteś ideałem", "za Twój błysk w oku", "za Twój dotyk", "bo Ci ufam, jak nikomu", "za Twoje komplementy", "bo z Tobą wszystko jest możliwe", "za każdy Twój gest", "za bezgraniczne zaufanie", "bo mnie wybrałaś spośród tylu facetów", "za namiętne akcje", "bo czytasz mi w myślach", "bo wiesz czego pragnę", "za lekcje, jakie mi dajesz", "za Twoje oddanie", "za spokój, jaki mi zapewniasz", "za niespodzianki", "bo sprawiasz, że życie jest łatwiejsze", "bo wiem że pozostaniesz przy mnie", "bo nadajesz sens mojemu istnieniu", "bo zawsze jesteś", "za ciepło, jaki mi dajesz", "bo dajesz mi pozytywne emocje", "gdy mnie drażnisz", "bo jesteś taka jaka jesteś", "bo jesteś tylko i wyłącznie moja", "bo lubię Cię całować", "że wiesz co lubie", "bo wiem że z Tobą mogę wszystko", "bo dzięki Tobie mam dla kogo żyć", "bo cały czas mówisz „Kocham Cię”", "bo mi wybaczasz moją nieporadność", "dotykać", "najmocniej na świecie", "bo mamy wspólne plany na przyszłość", "bo to miłość", "bo tak chce i już!", "bo chce z Tobą iść przez życie", "bo jesteś kobietą mojego życia", "bo spełniasz moje sny", "bo dobrze jest nam razem", "bo jesteś dobrym człowiekiem", "bo jest nam idealnie", "za nasze radosne i złe chwile", "za pomocne ramię", "za Twoje wewnętrzne piękno", "bo jesteś moją przyszłością", "za malinki na szyi", "bo widzę, jak o mnie zabiegasz", "za każdą minutę razem", "bo robisz to wszystko i nic nie chcesz w zamian", "bo jesteś o mnie zazdrosna", "za smak miłości, jaki mi dajesz", "za nocne wypady na maka", "za długie wspólne noce", "za Twoje szczere uczucie do mnie", "za romantyczne momenty", "bo jesteś moim uzależnieniem", "za chwilę, które zapamiętam na zawsze", "za każdy moment w Twoich ramionach", "za magię w Twoich oczac", "za emocjonalność", "za Twoje podejście do życia", "bo mnie kręcisz, jak nikt inny", "za to, jak o mnie dbasz", "bo mnie fascynujesz", "za to, że pozwalasz mi na wszystko", "bo przeżywam z Tobą prawdziwą miłość", "za to, że ścielisz mi łóżko", "bo nie mogę żyć bez Ciebie", "nawet, gdy narzekasz", "bo wkładasz wiele wysiłku w nasze życie", "bo robisz na mnie zawsze wrażenie", "bo idziemy razem przez życie", "bo jesteś moim skarbem", "za Twoje małe i duże czyny", "bo zaspakajasz moje sprośne sny", "bo jesteś moją miłością", "bo pasujesz, jak ulał", "bo nie boisz się przy mnie płakać", "za to, że nigdy mnie nie odtrącasz", "za proste gesty", "za to, że mi gotujesz", "za to, że mnie rozpieszczasz", "bo jesteś cudowna"];

const length = reasons.length;
let field = document.getElementById("field");
const btn = document.getElementById("btn");

field.innerHTML = "&#x1F90D;";
const random = () => {
    //get random number 
    return Math.floor(Math.random() * length);
}


const write = () => {
    //write reason on screen
    field.innerHTML = reasons[random()] + ".";
}

btn.addEventListener("click", write)
