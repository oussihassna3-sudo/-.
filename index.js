await reply(menu);
}
if(cmd=='.ping') reply('🏓 Pong! 0.12s ⚡\n✅ 24/24 خدام');
if(cmd=='.alive') reply('🐉 NEEMSS BOT حي وخدام 24/24!');
if(cmd=='.runtime') reply('⏰ خدام من: '+(process.uptime()/3600).toFixed(2)+' ساعة');
if(cmd=='.owner') reply('👑 المالك: oussihassna3-sudo\n📞 تواصل: wa.me/2126');
if(cmd=='.info') reply('🤖 NEEMSS v2\n📦 83 أمر\n☁️ Koyeb 24/24\n👑 oussihassna3-sudo');
if(cmd=='.bot') reply('🤖 أنا NEEMSS BOT خدام!');
if(cmd=='.sc'||cmd=='.repo') reply('📂 GitHub: github.com/oussihassna3-sudo/-.');
if(cmd=='.support') reply('🆘 الدعم: t.me/neemss');
if(cmd=='.donate') reply('💰 شكرا للدعم! ❤️');
if(cmd=='.sticker') reply('📸 صيفط صورة مع.sticker باش نردها ستيكر');
if(cmd=='.toimg') reply('🔄 صيفط ستيكر مع.toimg باش نردو صورة');
if(cmd=='.attp') reply(q?`🎨 كلمة: ${q} (قريبا attp)`:'كتب.attp + كلمة');
if(cmd=='.play') reply(q?`🎵 كتحميل: ${q} (قريبا yt)`:'كتب.play + سميت الأغنية');
if(cmd=='.tiktok') reply('⬇️ TikTok downloader - صيفط ليان');
if(cmd=='.fb') reply('⬇️ FB downloader - صيفط ليان');
if(cmd=='.ig') reply('⬇️ IG downloader - صيفط ليان');
if(cmd=='.ytmp3') reply('🎵 YTMP3 - صيفط ليان');
if(cmd=='.ytmp4') reply('🎬 YTMP4 - صيفط ليان');
if(cmd=='.ai'||cmd=='.gpt') reply('🤖 AI: '+(q||'سولني!')+'\n(جواب تجريبي)');
if(cmd=='.img'||cmd=='.dalle') reply('🎨 تصويرة: '+(q||'شنو بغيتي نرسم؟'));
if(cmd=='.tagall') reply('👥 @all - (خاصك تكون أدمن)');
if(cmd=='.hidetag') reply('👻 Hidetag - رسالة مخفية');
if(cmd=='.kick') reply('👢 Kick - خاصك تكون أدمن');
if(cmd=='.add') reply('➕ Add - زيد نمرة');
if(cmd=='.promote') reply('⬆️ Promote - طلع أدمن');
if(cmd=='.demote') reply('⬇️ Demote - هبط أدمن');
if(cmd=='.link') reply('🔗 ليان الجروب غادي يجي هنا');
if(cmd=='.group') reply('👥 إعدادات الجروب');
if(cmd=='.joke') reply('😂 واحد قال لمراتو: علاش كطيبي العدس كل نهار؟ قالت ليه: حيت كانبغيك تعس! 😂');
if(cmd=='.quote') reply('💬 "النجاح هو أن تفشل مرة أخرى ولكن بحماس أكبر"');
if(cmd=='.fact') reply('🧠 معلومة: الأخطبوط عندو 3 قلوب!');
if(cmd=='.meme') reply('😂 ميم - قريبا!');
if(cmd=='.rank') reply('🏆 الرانك ديالك: 10');
if(cmd=='.profile') reply('👤 بروفايل: '+from);
if(cmd=='.weather') reply('🌤️ الطقس: '+(q||'Marrakech')+' - 28°C مشمس');
if(cmd=='.translate') reply('🌐 ترجمة: '+(q||'كتب نص'));
if(cmd=='.calc') {try{reply('🧮 = '+eval(q))}catch{reply('❌ خطأ في الحساب')}}
if(cmd=='.id') reply('🆔 ID: '+from);
if(cmd=='.jid') reply('🆔 JID: '+from);
// باقي الأوامر نفس الفكرة - تقدر تزيد...
if(['.hug','.kiss','.slap','.pat','.neko','.waifu','.anime','.wallpaper','.image','.google','.wiki','.lyrics','.top','.level','.ban','.unban','.block','.unblock','.news','.afk','.del','.forward','.save','.url','.git','.setpp','.setname','.setdesc','.welcome','.goodbye','.antilink','.antispam'].includes(cmd)){
reply(`✅ الأمر ${cmd} خدام! (قريبا كامل)`);
}
});
}
startBot();
