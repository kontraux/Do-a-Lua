let routes = {};
let templates = {};

function buildNav() {
    let div = document.getElementById('nav') || document.createElement('div')
    div.id = 'nav'
    div.class = 'nav'
    fetch('./nav.html')
        .then (response => {
            return response.text()
        })
            .then(data => {
            div.innerHTML = data;
            })
            document.body.appendChild(div)
            return div
}

function buildPage(file) {
    buildNav()
    let div = document.getElementById('page') || document.createElement('div')
    div.id = 'page'
    fetch(file)
        .then(response => {
          return response.text()
        })
        .then(data => {
        div.innerHTML = data;
        });
        document.body.appendChild(div)
        return div
    
}

function drunk() { buildPage('drunk.html'); }
function index() { buildPage('homepage.html') }
function art() { buildPage('art.html'); }
function bio() { buildPage('bio.html'); }
function boids() { buildPage('boids.html'); }
function blog() { buildPage('blog.html'); }
function cellular_automata() { buildPage('cellular_automata.html'); }
function drunk () { buildPage('drunk.html'); }
function projection () { buildPage('projection.html'); }
function stocks () { buildPage('stocks.html'); }
function type () { buildPage('type.html'); }

function template (name, templateFunction) {
    return templates[name] = templateFunction;
};

templates = {   'art' : art,
                'bio' : bio,
                'blog': blog,
                'boids': boids,
                'cellular_automata': cellular_automata,
                'drunk':drunk,
                'index':index,
                'projection':projection,
                'type':type,
                'stocks':stocks,
             }

function route (path, template) {
        if (typeof template === 'function') {
            return routes[path] = template;
        }
        else if (typeof template === 'string') {
            return routes[path] = templates[template];
        } else {
            return;
    };
};

route('type', 'type');
route('stocks', 'stocks');
route('projection', 'projection');
route('drunk', 'drunk');
route('cellular_automata', 'cellular_automata');
route('boids', 'boids');
route('blog', 'blog');
route('bio', 'bio');
route('art', 'art');
route('/', 'index');

function resolveRoute(route) {
    console.log(route)
    try {
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);
    console.log(url, route)
    route();
};

window.addEventListener('load', router)
window.addEventListener('hashchange', router);