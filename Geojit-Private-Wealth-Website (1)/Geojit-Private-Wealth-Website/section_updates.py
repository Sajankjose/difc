from html import escape

MILESTONES = [
('1987', 'An entrepreneurial beginning', 'Established M/s C J George and Co., a proprietary firm at Ravipuram, in a garage converted into an office.'),
('1995', 'Becoming a public limited company', 'Geojit and Co. became a public limited company and was named Geojit Securities Ltd.'),
('1997', 'Portfolio management takes shape', 'Launched Portfolio Management Services with SEBI registration.'),
('2000', 'Pioneering internet trading', 'Geojit launched India’s first internet trading facility.'),
('2001', 'Building connections in the UAE', 'Geojit signed an MoU with Barjeel Shares and Bonds LLC, a part of Al Saud Group, UAE.'),
('2006', 'A global banking partnership', 'Geojit joined hands with French banking giant BNP Paribas.'),
('2010', 'Trading goes mobile', 'Launched FLIP ME, India’s first mobile trading app.'),
('2015', 'An advanced trading experience', 'Launched a new advanced trading platform, SELFIE.'),
('2017', 'A dedicated private wealth division', 'Established Geojit’s Private Wealth Services Division.'),
('2023', 'A gateway to global investments', 'Established Geojit IFSC at GIFT City for global investments.'),
('2025', 'Expanding into alternative investments', 'Launched Alternative Investment Fund (AIF), Geojit Yield Plus.'),
('2026', 'A new chapter in DIFC', 'Geojit Private Wealth DIFC was launched.')
]
PILLARS = [
('Global perspective', 'Helping clients identify and capitalise on investment opportunities across markets, asset classes and geographies.'),
('DFSA-regulated platform', 'A trusted regulatory environment designed to promote transparency, governance and investor protection.'),
('Open architecture advisory', 'Objective, client-first recommendations drawn from a broad universe of investment opportunities, free from product or provider bias.'),
('Research-driven investing', 'Nearly four decades of market experience, research-driven insights and disciplined wealth management.')
]

def credentials():
    stats = [('US$11.75', 'billion', 'Client assets'), ('39', 'years', 'Market leadership'), ('1.69', 'million', 'Trusted clients'), ('525', 'offices', 'Across India & the GCC')]
    return '<section class="section credentials border-top" aria-labelledby="credentials-title"><div class="container"><div class="section-heading"><div><p class="eyebrow">Geojit group at a glance</p><h2 id="credentials-title">Guiding ambitions.<br>Building futures over decades.</h2></div><p class="small">Geojit group figures<br>As of June 2026</p></div><dl class="credentials-grid">'+''.join('<div><dt>'+label+'</dt><dd><span class="stat-value">'+value+'</span><span class="stat-unit">'+unit+'</span></dd></div>' for value,unit,label in stats)+'</dl></div></section>'

def pillars():
    return '<section class="section border-top" aria-labelledby="pillars-title"><div class="container"><div class="section-heading"><div><p class="eyebrow">Why Geojit Private Wealth DIFC</p><h2 id="pillars-title">A wider perspective.<br>A considered approach.</h2></div><p>Four foundations for a wealth journey shaped around you.</p></div><div class="pillars-grid">'+''.join('<article class="pillar"><span class="index">0'+str(i+1)+'</span><h3>'+title+'</h3><p>'+desc+'</p></article>' for i,(title,desc) in enumerate(PILLARS))+'</div><a class="inline-link" href="about.html">Get to know Geojit <img class="arrow" src="assets/arrow-up-right.svg" alt="" width="24" height="24"></a></div></section>'

def timeline():
    tabs=''.join('<button type="button" role="tab" class="year-tab" id="year-tab-'+year+'" aria-controls="milestone-'+year+'" aria-selected="'+str(i==0).lower()+'" tabindex="'+('0' if i==0 else '-1')+'">'+year+'</button>' for i,(year,title,desc) in enumerate(MILESTONES))
    panels=''.join('<div class="milestone-panel" role="tabpanel" id="milestone-'+year+'" aria-labelledby="year-tab-'+year+'" tabindex="0" '+('hidden' if i else '')+'><div class="milestone-year" aria-hidden="true">'+year+'</div><div><p class="eyebrow">Milestone '+str(i+1).zfill(2)+' / 12</p><h3>'+title+'</h3><p class="lead">'+desc+'</p></div></div>' for i,(year,title,desc) in enumerate(MILESTONES))
    overview=''.join('<li><span class="overview-year">'+year+'</span><div><h3>'+title+'</h3><p>'+desc+'</p></div></li>' for year,title,desc in MILESTONES)
    return '<section class="section raised heritage-timeline" id="our-journey" aria-labelledby="journey-title"><div class="container"><div class="section-heading"><div><p class="eyebrow">Our journey · 1987–2026</p><h2 id="journey-title">From a first step<br>to a global perspective.</h2></div><p>Explore the milestones that shaped Geojit, from a garage in Ravipuram to Private Wealth in DIFC.</p></div><div class="timeline-tabs" role="tablist" aria-label="Select a milestone year">'+tabs+'</div><div class="timeline-panels">'+panels+'</div><div class="timeline-controls"><p class="small muted" id="timeline-position" aria-live="polite" aria-atomic="true">1987 · 1 of 12</p><div><button class="timeline-step" id="timeline-prev" aria-label="Previous milestone" disabled>← <span>Previous</span></button><button class="timeline-step" id="timeline-next" aria-label="Next milestone"><span>Next</span> →</button></div></div><details class="all-milestones"><summary>View all 12 milestones</summary><ol>'+overview+'</ol></details></div></section>'

def update_sections(home,about):
    start=home.index('<section class="section border-top">')
    end=home.index('<section class="section raised">',start)
    home=home[:start]+pillars()+credentials()+home[end:]
    start=about.index('<section class="heritage raised">')
    end=about.index('<section class="section">',start)
    about=about[:start]+credentials()+timeline()+about[end:]
    return home,about
