// ===== i18n — JP/EN Language Toggle =====
var TRANSLATIONS = {
  en: {
    // Shared (header/footer)
    'footer.copyright': '\u00a9 2026 XENO. All rights reserved.',

    // Home
    'home.subtitle': 'Minecraft Projects / Plugin Dev / Game Creator',
    'home.profile.bio': 'A VTuber aiming to be known as "the quintessential mob."',
    'home.activity.1': 'Minecraft MODs / Maps',
    'home.activity.2': 'Original Events',
    'home.activity.3': 'Plugin Development',
    'home.activity.4': 'Thumbnail Design',
    'home.target.goal': '10,000 Subscribers',
    'home.target.loading': 'Not displayed',
    'home.fanname.reading': 'kogitsune',
    'home.costume.main': 'Main Outfit',
    'home.costume.mask_side': 'Mask (Side)',
    'home.costume.mask_on': 'Mask (On)',
    'home.costume.unrevealed': 'Unrevealed',
    'home.costume.prev': 'Previous costume',
    'home.costume.next': 'Next costume',

    // Link
    'link.subtitle': 'Links to SNS & Platforms',
    'link.yt.desc': 'Posting Minecraft events and gaming videos',
    'link.x.desc': 'Latest activity updates and announcements',
    'link.discord.name': 'Discord \u2014 \u662f\u4e43\u88c1',
    'link.discord.desc': 'Event announcements, recruitment & chat',
    'link.marshmallow': 'Marshmallow',
    'link.marshmallow.desc': 'Questions & messages here',
    'link.portfolio.desc': 'Thumbnail portfolio (contact via X DM)',

    // Live
    'live.now': 'Now Streaming',
    'live.now.empty': 'No streams currently live',
    'live.upcoming': 'Upcoming',
    'live.upcoming.empty': 'No upcoming streams',
    'live.recommend': 'Recommend',
    'live.recommend.empty': 'Not displayed',
    'live.schedule': 'Schedule',
    'live.watch': 'Watch Stream',
    'live.admin.add': 'Add Schedule',
    'live.admin.edit': 'Edit Schedule',
    'live.admin.logout': 'Log Out',
    'live.admin.password': 'Password',
    'live.admin.login': 'Log In',
    'live.admin.date': 'Date',
    'live.admin.time': 'Time',
    'live.admin.title_label': 'Title',
    'live.admin.title_placeholder': 'Auto-fills when date is selected',
    'live.admin.url_placeholder': 'https://youtube.com/...',
    'live.admin.tag': 'Tag',
    'live.admin.tag_select': 'Select a tag',
    'live.admin.tag.video': 'Video Upload',
    'live.admin.tag.song': 'Song Upload',
    'live.admin.tag.short': 'Short Upload',
    'live.admin.tag.live': 'Live Stream',
    'live.admin.tag.collab': 'Collab Stream',
    'live.admin.tag.yozeraji': 'Yozeraji Stream',
    'live.admin.memo': 'Memo',
    'live.admin.memo_placeholder': 'Short note (optional)',
    'live.admin.collab': 'Collaborator',
    'live.admin.collab_name': 'Name',
    'live.admin.collab_url': 'X URL',
    'live.admin.collab_add': '+ Add collaborator',
    'live.admin.save': 'Save',
    'live.admin.cancel': 'Cancel',
    'live.admin.delete': 'Delete',
    'live.admin.delete_title': 'Delete Schedule',
    'live.admin.delete_confirm': 'This action cannot be undone',
    'live.admin.delete_btn': 'Delete',
    'live.admin.alert.wrong_pass': 'Wrong password',
    'live.admin.alert.login_fail': 'Login failed',
    'live.admin.alert.date_title_required': 'Date and title are required',
    'live.admin.alert.tag_required': 'Please select a tag',
    'live.admin.alert.save_fail': 'Failed to save',
    'live.admin.alert.delete_fail': 'Failed to delete',
    'live.detail.partner': 'Partner',
    'live.detail.guest': 'Guest',
    'live.detail.collab_partner': 'Collaborator',

    // Fan Art
    'fanart.post_btn': 'Post Fan Art',
    'fanart.notice.title': 'Fan Art Usage Policy',
    'fanart.notice.1': 'Illustrations posted with #\u662f\u7d75\u4e43\u306e\u5c55\u89a7\u4f1a may be featured on this site',
    'fanart.notice.2': 'Credit and links will be provided',
    'fanart.notice.3': 'May be used for thumbnails or icons',
    'fanart.notice.4': 'Editing requires DM permission first',
    'fanart.notice.5': 'If contact is lost, art may be used unedited',
    'fanart.notice.6': 'To request removal, please DM',
    'fanart.empty': 'No fan art yet',
    'fanart.view_post': 'View Post',
    'fanart.admin.title': 'Admin Panel',
    'fanart.admin.search': 'Search #\u662f\u7d75\u4e43\u306e\u5c55\u89a7\u4f1a (new window)',
    'fanart.admin.paste_url': 'Paste Tweet URL',
    'fanart.admin.add': 'Add',
    'fanart.admin.pending': 'Pending',
    'fanart.admin.pending_empty': 'No pending items',
    'fanart.admin.verify_post': 'Verify Post',
    'fanart.admin.approve': 'Approve',
    'fanart.admin.reject': 'Reject',
    'fanart.admin.reject_title': 'Confirm Rejection',
    'fanart.admin.reject_msg': 'Reject this fan art?',
    'fanart.admin.reject_btn': 'Reject',
    'fanart.admin.delete_title': 'Confirm Deletion',
    'fanart.admin.delete_msg': 'Delete this approved fan art?',
    'fanart.admin.delete_btn': 'Delete',
    'fanart.admin.password': 'Password',
    'fanart.admin.cancel': 'Cancel',
    'fanart.admin.alert.wrong_pass': 'Wrong password',
    'fanart.admin.alert.login_fail': 'Login failed',
    'fanart.admin.alert.added': 'Added! (Pending approval)',
    'fanart.admin.alert.invalid_url': 'Please enter a valid tweet URL',
    'fanart.admin.alert.error': 'An error occurred',
    'fanart.admin.alert.comm_error': 'Communication error',
    'fanart.admin.fetching': 'Fetching...',

    // Battle Royale
    'br.subtitle': 'Choose your role. Survive as a team.',
    'br.overview.1': 'Team-based battle royale in Minecraft 1.21.1',
    'br.overview.2': 'Original system powered by the "Synergy" plugin',
    'br.overview.3': 'Up to 3 players per team',
    'br.overview.4': 'Choose from 3 roles to fight',
    'br.roles.desc': 'Each team selects from Attacker \u00d72 / Defender \u00d72 / Supporter \u00d71',
    'br.attacker.slots': 'Max 2 slots',
    'br.attacker.desc': 'Offense-focused role. Eliminate enemies with high firepower.',
    'br.defender.slots': 'Max 2 slots',
    'br.defender.desc': 'Tank/defense role. Protect the team and hold the front line.',
    'br.supporter.slots': 'Max 1 slot',
    'br.supporter.desc': 'Support role. Heal and buff the team.',
    'br.rule.1': 'If all team members die, the team is eliminated',
    'br.rule.2': 'Last team standing wins',
    'br.rule.3': 'Revival system available (conditional)',
    'br.rule.4': 'Each role has unique skills and weapons',
    'br.rule.5': 'Equipment is fixed per role (no free changes)',
    'br.join.1': 'Join the Discord server "\u662f\u4e43\u88c1"',
    'br.join.2': 'Check the event announcement channel',
    'br.join.3': 'Sign up and connect on the day!',
    'br.join.btn': 'Join Discord',
    'br.notice.1': 'Cheats/hacks result in immediate ban',
    'br.notice.2': 'Toxic behavior is prohibited',
    'br.notice.3': 'Rules may be updated at any time',
    'br.notice.4': 'Ask questions on Discord',

    // Projects
    'projects.subtitle': 'Projects by XENO',
    'projects.synergy.desc': 'Choose your role. Survive as a team. — A 3-role team battle royale event.',
    'projects.synergy.link': 'View details \u2192',
    'projects.kogiyugi.desc': 'Suspect. Expose. Survive. — A psychological battle between foxes and villagers.',
    'projects.kogiyugi.status': 'Coming soon\u2026',

    // Calendar day headers
    'cal.sun': 'SUN', 'cal.mon': 'MON', 'cal.tue': 'TUE', 'cal.wed': 'WED',
    'cal.thu': 'THU', 'cal.fri': 'FRI', 'cal.sat': 'SAT'
  },
  ja: {
    'footer.copyright': '\u00a9 2026 XENO. All rights reserved.',
    'home.subtitle': 'Minecraft\u4f01\u753b / \u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a / \u30b2\u30fc\u30e0\u30af\u30ea\u30a8\u30a4\u30bf\u30fc',
    'home.profile.bio': '\u300c\u30e2\u30d6\u3068\u3044\u3048\u3070\u304a\u308c\u300d\u2015\u2015\u305d\u3046\u8a00\u308f\u308c\u308b\u5b58\u5728\u3092\u76ee\u6307\u3057\u3066\u6d3b\u52d5\u4e2d\u306eVTuber\u3067\u3059\u3002',
    'home.activity.1': 'Minecraft MOD / \u914d\u5e03\u30de\u30c3\u30d7',
    'home.activity.2': '\u81ea\u4f5c\u4f01\u753b\u306e\u958b\u50ac',
    'home.activity.3': '\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a',
    'home.activity.4': '\u30b5\u30e0\u30cd\u5236\u4f5c',
    'home.target.goal': '\u30c1\u30e3\u30f3\u30cd\u30eb\u767b\u9332\u8005 10,000 \u4eba',
    'home.target.loading': '\u73fe\u5728\u8868\u793a\u306f\u3055\u308c\u307e\u305b\u3093',
    'home.fanname.reading': '\u3053\u304e\u3064\u306d',
    'home.costume.main': '\u30e1\u30a4\u30f3\u8863\u88c5',
    'home.costume.mask_side': '\u304a\u9762\u6a2a',
    'home.costume.mask_on': '\u304a\u9762\u88c5\u7740',
    'home.costume.unrevealed': '\u672a\u516c\u958b',
    'home.costume.prev': '\u524d\u306e\u8863\u88c5',
    'home.costume.next': '\u6b21\u306e\u8863\u88c5',
    'link.subtitle': '\u5404SNS\u30fb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3078\u306e\u30ea\u30f3\u30af',
    'link.yt.desc': 'Minecraft\u4f01\u753b\u3084\u30b2\u30fc\u30e0\u95a2\u9023\u306e\u52d5\u753b\u3092\u6295\u7a3f\u3057\u3066\u3044\u307e\u3059',
    'link.x.desc': '\u6d3b\u52d5\u306e\u6700\u65b0\u60c5\u5831\u3084\u544a\u77e5\u3092\u30dd\u30b9\u30c8\u3057\u3066\u3044\u307e\u3059',
    'link.discord.name': 'Discord \u2014 \u662f\u4e43\u88c1',
    'link.discord.desc': '\u4f01\u753b\u306e\u544a\u77e5\u30fb\u53c2\u52a0\u8005\u52df\u96c6\u30fb\u96d1\u8ac7\u306f\u3053\u3061\u3089',
    'link.marshmallow': '\u30de\u30b7\u30e5\u30de\u30ed',
    'link.marshmallow.desc': '\u8cea\u554f\u30fb\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u3053\u3061\u3089\u304b\u3089',
    'link.portfolio.desc': '\u30b5\u30e0\u30cd\u5236\u4f5c\u306e\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\uff08\u4f9d\u983c\u306fX\u306eDM\u307e\u3067\uff09',
    'live.now': 'Now Streaming',
    'live.now.empty': '\u73fe\u5728\u914d\u4fe1\u306f\u3042\u308a\u307e\u305b\u3093',
    'live.upcoming': 'Upcoming',
    'live.upcoming.empty': '\u4e88\u7d04\u914d\u4fe1\u306f\u3042\u308a\u307e\u305b\u3093',
    'live.recommend': 'Recommend',
    'live.recommend.empty': '\u73fe\u5728\u8868\u793a\u306f\u3055\u308c\u307e\u305b\u3093',
    'live.schedule': 'Schedule',
    'live.watch': '\u914d\u4fe1\u3092\u898b\u308b',
    'live.admin.add': '\u4e88\u5b9a\u3092\u8ffd\u52a0',
    'live.admin.edit': '\u4e88\u5b9a\u3092\u7de8\u96c6',
    'live.admin.logout': '\u30ed\u30b0\u30a2\u30a6\u30c8',
    'live.admin.password': '\u30d1\u30b9\u30ef\u30fc\u30c9',
    'live.admin.login': '\u30ed\u30b0\u30a4\u30f3',
    'live.admin.date': '\u65e5\u4ed8',
    'live.admin.time': '\u6642\u9593',
    'live.admin.title_label': '\u30bf\u30a4\u30c8\u30eb',
    'live.admin.title_placeholder': '\u65e5\u4ed8\u3092\u9078\u3076\u3068\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059',
    'live.admin.url_placeholder': 'https://youtube.com/...',
    'live.admin.tag': '\u30bf\u30b0',
    'live.admin.tag_select': '\u30bf\u30b0\u3092\u9078\u629e',
    'live.admin.tag.video': '\u52d5\u753b\u6295\u7a3f',
    'live.admin.tag.song': '\u6b4c\u6295\u7a3f',
    'live.admin.tag.short': '\u30b7\u30e7\u30fc\u30c8\u6295\u7a3f',
    'live.admin.tag.live': '\u30e9\u30a4\u30d6\u914d\u4fe1',
    'live.admin.tag.collab': '\u30b3\u30e9\u30dc\u914d\u4fe1',
    'live.admin.tag.yozeraji': '\u3088\u305c\u3089\u3058\u914d\u4fe1',
    'live.admin.memo': '\u30e1\u30e2',
    'live.admin.memo_placeholder': '\u4e00\u8a00\u30e1\u30e2\uff08\u4efb\u610f\uff09',
    'live.admin.collab': '\u30b3\u30e9\u30dc\u76f8\u624b',
    'live.admin.collab_name': '\u540d\u524d',
    'live.admin.collab_url': 'X URL',
    'live.admin.collab_add': '+ \u76f8\u624b\u3092\u8ffd\u52a0',
    'live.admin.save': '\u4fdd\u5b58',
    'live.admin.cancel': '\u30ad\u30e3\u30f3\u30bb\u30eb',
    'live.admin.delete': '\u524a\u9664',
    'live.admin.delete_title': '\u4e88\u5b9a\u3092\u524a\u9664',
    'live.admin.delete_confirm': '\u3053\u306e\u64cd\u4f5c\u306f\u53d6\u308a\u6d88\u305b\u307e\u305b\u3093',
    'live.admin.delete_btn': '\u524a\u9664\u3059\u308b',
    'live.admin.alert.wrong_pass': '\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059',
    'live.admin.alert.login_fail': '\u30ed\u30b0\u30a4\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f',
    'live.admin.alert.date_title_required': '\u65e5\u4ed8\u3068\u30bf\u30a4\u30c8\u30eb\u306f\u5fc5\u9808\u3067\u3059',
    'live.admin.alert.tag_required': '\u30bf\u30b0\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044',
    'live.admin.alert.save_fail': '\u4fdd\u5b58\u306b\u5931\u6557\u3057\u307e\u3057\u305f',
    'live.admin.alert.delete_fail': '\u524a\u9664\u306b\u5931\u6557\u3057\u307e\u3057\u305f',
    'live.detail.partner': '\u76f8\u65b9',
    'live.detail.guest': '\u30b2\u30b9\u30c8',
    'live.detail.collab_partner': '\u30b3\u30e9\u30dc\u76f8\u624b',
    'fanart.post_btn': '\u30d5\u30a1\u30f3\u30a2\u30fc\u30c8\u3092\u6295\u7a3f\u3059\u308b',
    'fanart.notice.title': '\u30d5\u30a1\u30f3\u30a2\u30fc\u30c8\u306e\u53d6\u308a\u6271\u3044\u306b\u3064\u3044\u3066',
    'fanart.notice.1': '#\u662f\u7d75\u4e43\u306e\u5c55\u89a7\u4f1a \u3067\u6295\u7a3f\u3055\u308c\u305f\u30a4\u30e9\u30b9\u30c8\u306f\u3001\u672c\u30b5\u30a4\u30c8\u306b\u63b2\u8f09\u3055\u305b\u3066\u3044\u305f\u3060\u304f\u5834\u5408\u304c\u3042\u308a\u307e\u3059',
    'fanart.notice.2': '\u63b2\u8f09\u6642\u306f\u6295\u7a3f\u8005\u540d\u30fb\u30ea\u30f3\u30af\u3092\u8868\u8a18\u3057\u307e\u3059',
    'fanart.notice.3': '\u30b5\u30e0\u30cd\u30a4\u30eb\u3084\u30a2\u30a4\u30b3\u30f3\u306b\u4f7f\u7528\u3055\u305b\u3066\u3044\u305f\u3060\u304f\u3053\u3068\u304c\u3042\u308a\u307e\u3059',
    'fanart.notice.4': '\u52a0\u5de5\u304c\u5fc5\u8981\u306a\u5834\u5408\u306fDM\u306b\u3066\u8a31\u53ef\u3092\u9802\u3044\u3066\u304b\u3089\u4f7f\u7528\u3057\u307e\u3059',
    'fanart.notice.5': '\u30a2\u30ab\u30a6\u30f3\u30c8\u6d88\u5931\u7b49\u3067\u9023\u7d61\u304c\u53d6\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u52a0\u5de5\u305b\u305a\u305d\u306e\u307e\u307e\u4f7f\u7528\u3057\u307e\u3059',
    'fanart.notice.6': '\u63b2\u8f09\u306e\u53d6\u308a\u4e0b\u3052\u306fDM\u306b\u3066\u3054\u9023\u7d61\u304f\u3060\u3055\u3044',
    'fanart.empty': '\u307e\u3060\u30d5\u30a1\u30f3\u30a2\u30fc\u30c8\u304c\u3042\u308a\u307e\u305b\u3093',
    'fanart.view_post': '\u30dd\u30b9\u30c8\u3092\u898b\u308b',
    'fanart.admin.title': 'Admin Panel',
    'fanart.admin.search': '#\u662f\u7d75\u4e43\u306e\u5c55\u89a7\u4f1a \u3092\u691c\u7d22\uff08\u5225\u30a6\u30a3\u30f3\u30c9\u30a6\uff09',
    'fanart.admin.paste_url': '\u30c4\u30a4\u30fc\u30c8URL\u3092\u8cbc\u308a\u4ed8\u3051',
    'fanart.admin.add': '\u8ffd\u52a0',
    'fanart.admin.pending': '\u627f\u8a8d\u5f85\u3061',
    'fanart.admin.pending_empty': '\u627f\u8a8d\u5f85\u3061\u306f\u3042\u308a\u307e\u305b\u3093',
    'fanart.admin.verify_post': '\u30dd\u30b9\u30c8\u3092\u78ba\u8a8d',
    'fanart.admin.approve': '\u627f\u8a8d',
    'fanart.admin.reject': '\u5374\u4e0b',
    'fanart.admin.reject_title': '\u5374\u4e0b\u78ba\u8a8d',
    'fanart.admin.reject_msg': '\u3053\u306e\u30d5\u30a1\u30f3\u30a2\u30fc\u30c8\u3092\u5374\u4e0b\u3057\u307e\u3059\u304b\uff1f',
    'fanart.admin.reject_btn': '\u5374\u4e0b\u3059\u308b',
    'fanart.admin.delete_title': '\u524a\u9664\u78ba\u8a8d',
    'fanart.admin.delete_msg': '\u3053\u306e\u627f\u8a8d\u6e08\u307f\u30d5\u30a1\u30f3\u30a2\u30fc\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f',
    'fanart.admin.delete_btn': '\u524a\u9664\u3059\u308b',
    'fanart.admin.password': '\u30d1\u30b9\u30ef\u30fc\u30c9',
    'fanart.admin.cancel': '\u30ad\u30e3\u30f3\u30bb\u30eb',
    'fanart.admin.alert.wrong_pass': '\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059',
    'fanart.admin.alert.login_fail': '\u30ed\u30b0\u30a4\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f',
    'fanart.admin.alert.added': '\u8ffd\u52a0\u3057\u307e\u3057\u305f\uff01\uff08\u627f\u8a8d\u5f85\u3061\uff09',
    'fanart.admin.alert.invalid_url': '\u6b63\u3057\u3044\u30c4\u30a4\u30fc\u30c8URL\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044',
    'fanart.admin.alert.error': '\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f',
    'fanart.admin.alert.comm_error': '\u901a\u4fe1\u30a8\u30e9\u30fc',
    'fanart.admin.fetching': '\u53d6\u5f97\u4e2d...',
    'br.subtitle': '\u30ed\u30fc\u30eb\u3092\u9078\u3079\u3002\u30c1\u30fc\u30e0\u3067\u751f\u304d\u6b8b\u308c\u3002',
    'br.overview.1': 'Minecraft 1.21.1 \u3067\u884c\u3046\u30c1\u30fc\u30e0\u5236\u30d0\u30c8\u30eb\u30ed\u30ef\u30a4\u30e4\u30eb',
    'br.overview.2': '\u81ea\u4f5c\u30d7\u30e9\u30b0\u30a4\u30f3\u300cSynergy\u300d\u306b\u3088\u308b\u30aa\u30ea\u30b8\u30ca\u30eb\u30b7\u30b9\u30c6\u30e0',
    'br.overview.3': '1\u30c1\u30fc\u30e0\u6700\u59273\u4eba\u3067\u69cb\u6210',
    'br.overview.4': '3\u3064\u306e\u30ed\u30fc\u30eb\u304b\u3089\u81ea\u5206\u306e\u5f79\u5272\u3092\u9078\u3093\u3067\u6226\u3046',
    'br.roles.desc': '\u5404\u30c1\u30fc\u30e0 Attacker\u00d72 / Defender\u00d72 / Supporter\u00d71 \u306e\u679a\u304b\u3089\u9078\u629e',
    'br.attacker.slots': '\u6700\u59272\u679a',
    'br.attacker.desc': '\u653b\u6483\u7279\u5316\u306e\u30ed\u30fc\u30eb\u3002\u9ad8\u3044\u706b\u529b\u3067\u6575\u30c1\u30fc\u30e0\u3092\u6b72\u6ec5\u3059\u308b\u3002',
    'br.defender.slots': '\u6700\u59272\u679a',
    'br.defender.desc': '\u9632\u5fa1\u30fb\u8010\u4e45\u306e\u30ed\u30fc\u30eb\u3002\u30c1\u30fc\u30e0\u3092\u5b88\u308a\u3001\u524d\u7dda\u3092\u7dad\u6301\u3059\u308b\u3002',
    'br.supporter.slots': '\u6700\u59271\u679a',
    'br.supporter.desc': '\u652f\u63f4\u7279\u5316\u306e\u30ed\u30fc\u30eb\u3002\u56de\u5fa9\u3084\u30d0\u30d5\u3067\u30c1\u30fc\u30e0\u3092\u652f\u3048\u308b\u3002',
    'br.rule.1': '\u30c1\u30fc\u30e0\u5168\u54e1\u304c\u30c7\u30b9 \u2192 \u305d\u306e\u30c1\u30fc\u30e0\u306f\u6557\u9000',
    'br.rule.2': '\u6700\u5f8c\u307e\u3067\u751f\u5b58\u3057\u305f\u30c1\u30fc\u30e0\u304c\u52dd\u5229',
    'br.rule.3': '\u8607\u751f\u30b7\u30b9\u30c6\u30e0\u3042\u308a\uff08\u6761\u4ef6\u4ed8\u304d\uff09',
    'br.rule.4': '\u5404\u30ed\u30fc\u30eb\u56fa\u6709\u306e\u30b9\u30ad\u30eb\u30fb\u6b66\u5668\u3092\u4f7f\u7528\u53ef\u80fd',
    'br.rule.5': '\u88c5\u5099\u306f\u30ed\u30fc\u30eb\u3054\u3068\u306b\u56fa\u5b9a\uff08\u81ea\u7531\u306a\u88c5\u5099\u5909\u66f4\u4e0d\u53ef\uff09',
    'br.join.1': 'Discord\u30b5\u30fc\u30d0\u30fc\u300c\u662f\u4e43\u88c1\u300d\u306b\u53c2\u52a0',
    'br.join.2': '\u4f01\u753b\u544a\u77e5\u30c1\u30e3\u30f3\u30cd\u30eb\u3067\u958b\u50ac\u60c5\u5831\u3092\u30c1\u30a7\u30c3\u30af',
    'br.join.3': '\u53c2\u52a0\u8868\u660e\u3057\u3066\u5f53\u65e5\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\uff01',
    'br.join.btn': 'Discord\u306b\u53c2\u52a0\u3059\u308b',
    'br.notice.1': '\u30c1\u30fc\u30c8\u30fb\u4e0d\u6b63\u30c4\u30fc\u30eb\u306e\u4f7f\u7528\u306f\u5373BAN',
    'br.notice.2': '\u66b4\u8a00\u30fb\u8ff7\u60d1\u884c\u70ba\u306f\u7981\u6b62',
    'br.notice.3': '\u30eb\u30fc\u30eb\u306f\u968f\u6642\u66f4\u65b0\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059',
    'br.notice.4': '\u4e0d\u660e\u70b9\u306fDiscord\u3067\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044',
    // Projects
    'projects.subtitle': '是乃の企画一覧',
    'projects.synergy.desc': 'ロールを選べ。チームで生き残れ。――3つの役職×チーム戦バトロワ企画',
    'projects.synergy.link': '詳細を見る \u2192',
    'projects.kogiyugi.desc': '疑え。暴け。生き延びろ。――狐と村人の心理戦',
    'projects.kogiyugi.status': '準備中…',

    'cal.sun': '\u65e5', 'cal.mon': '\u6708', 'cal.tue': '\u706b', 'cal.wed': '\u6c34',
    'cal.thu': '\u6728', 'cal.fri': '\u91d1', 'cal.sat': '\u571f'
  }
};

function getLang() {
  return localStorage.getItem('site-lang') || 'ja';
}

function setLang(lang) {
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateToggleButton(lang);
}

function applyTranslations(lang) {
  var dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
}

function t(key) {
  var lang = getLang();
  var dict = TRANSLATIONS[lang];
  return (dict && dict[key] !== undefined) ? dict[key] : key;
}

function updateToggleButton(lang) {
  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'ja' ? 'EN' : 'JP';
}

// Apply on load
document.addEventListener('DOMContentLoaded', function() {
  var lang = getLang();
  applyTranslations(lang);
  updateToggleButton(lang);
});
