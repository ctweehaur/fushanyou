const shortQData = [
    {
        id: "Q1",
        qZh: "路人在江边看到一个人正打算对婴儿做什么？婴儿当时有什么反应？",
        qPy: "lù rén zài jiāng biān kàn dào yī gè rén zhèng dǎ suàn duì yīng ér zuò shén me yīng ér dāng shí yǒu shén me fǎn yìng",
        qEn: "What did the passerby see a man preparing to do to a baby? How did the baby react?",
        sZh: [
            "1. 提取出文中那人粗暴动作的关键词句（欲投之江中）。",
            "2. 找出描写幼小婴儿状态的动作（婴儿啼）。"
        ],
        sPy: [
            "tí qǔ chū wén zhōng nà rén cū bào dòng zuò de guān jiàn cí jù yù tóu zhī jiāng zhōng",
            "zhǎo chū miáo xiě yòu xiǎo yīng ér zhuàng tài de dòng zuò yīng ér tí"
        ],
        sEn: "Step 1: Extract the core aggressive action from the text ('wished to throw him into the river').<br>Step 2: Identify the dynamic behavior of the infant ('the baby was wailing').",
        aZh: "路人看到一个人正拉着婴儿，打算把他扔进大江里面。那个可怜的婴儿吓得在江边大声哭泣。",
        aPy: "lù rén kàn dào yī gè rén zhèng lā zhe yīng ér dǎ suàn bǎ tā rēng jìn dà jiāng lǐ miàn zhè gè kě lián de yīng ér xià dé zài jiāng biān dà shēng kū qì",
        aEn: "The passerby witnessed a man gripping a baby, preparing to toss him straight into the river. The helpless baby was crying loudly in sheer panic on the riverbank."
    },
    {
        id: "Q2",
        qZh: "面对路人的质问，那个人给出了一个什么听起来极其荒唐的扔婴儿原因？",
        qPy: "miàn duì lù rén de zhì wèn nà gè rén gěi chū le yī gè shén me tīng qǐ lái jí qí huāng táng de rēng yīng ér yuán yīn",
        qEn: "When questioned by the passerby, what absurd reason did the man offer for throwing the baby?",
        sZh: [
            "1. 对应那个人回答的经典原话（此其父善游）。",
            "2. 说明他认为只要老子擅长游泳，儿子不需要学习也必然会擅长游泳。"
        ],
        sPy: [
            "duì yìng nà gè rén huí dá de jīng diǎn yuán huà cǐ qí fù shàn yóu",
            "shuō míng tā rèn wéi zhǐ yào lǎo zǐ shàn cháng yóu yǒng ér zǐ bù xū yào xué xí yě bì rán huì shàn cháng yóu yǒng"
        ],
        sEn: "Step 1: Focus on his textbook quote ('This child's father is excellent at swimming').<br>Step 2: Clarify his flawed logic that parental talent equates to an infant's instinct without nurture.",
        aZh: "那个人非常理直气壮地回答说，这个婴儿的父亲非常擅长游泳，所以把婴儿扔进江里没问题。",
        aPy: "nóng gè rén fēi cháng lǐ zhí qì zhuàng de huí dá shuō zhè gè yīng ér de fù qīn fēi cháng shàn cháng yóu yǒng suǒ yǐ bǎ yīng ér rēng jìn jiāng lǐ méi wèn tí",
        aEn: "The man confidently argued that because the baby's father was an expert swimmer, throwing the infant directly into the deep waters was perfectly fine."
    },
    {
        id: "Q3",
        qZh: "文章作者是如何利用反问句，有力地驳斥那个扔婴儿的人的逻辑谬误的？",
        qPy: "wén zhāng zuì zhě shì rú hé lì yòng fǎn wèn jù yǒu lì de bó chì nà gè rēng yīng ér de rén de luó jí miù wù de",
        qEn: "How does the author use a rhetorical question to sharply debunk the man's logical error?",
        sZh: [
            "1. 翻译文章第二段的核心反问句（其父虽善游，其子岂遽善游哉）。",
            "2. 阐明作者反驳的客观道理：做父亲的擅长游泳，不代表刚出生的儿子也就立刻天生会游泳。"
        ],
        sPy: [
            "fān yì wén zhāng dì èr duàn de hé xīn fǎn wèn jù qí fù suī shàn yóu qí zǐ qǐ jù shàn yóu zāi",
            "chǎn míng zuì zhě fǎn bó de kè guān dào lǐ zuò fù qīn de shàn cháng yóu yǒng bù biǎo shì gāng chū shēng de ér zǐ yě jiù lì kè tiān shēng huì yóu yǒng"
        ],
        sEn: "Step 1: Translate the text's brilliant rhetorical sentence ('Although his father swims well, is his son instantly a swimmer?').<br>Step 2: Define his counter-argument that gene excellence never replaces developmental learning.",
        aZh: "作者质问道，孩子的父亲虽然擅长游泳，但是他的儿子难道刚出生就也立刻擅长游泳了吗？这就直接点破了本领不能靠基因直接遗传的逻辑错误。",
        aPy: "zuì zhě zhì wèn dào hái zǐ de fù qīn suī rán shàn cháng yóu yǒng dàn shì tā de ér zǐ nán dào gāng chū shēng jiù yě lì kè shàn cháng yóu yǒng le ma zhè jiù zhí jiē diǎn pò le běn lǐng bù néng kào jī yīn zhí jiē yí chuán de luó jí cuò wù",
        aEn: "The author counter-asks: though the father is a swimmer, does that grant immediate mastery to the newborn son? This masterfully exposes the fallacy that skill transfers instantly without personal practice."
    },
    {
        id: "Q4",
        qZh: "结合故事的结论，如果一个国家的管理者用这种“引婴投江”的逻辑来治理社会（以此任物），会带来什么危害？",
        qPy: "jié hé gù shì de jié lùn rú guǒ yī gè guó jiā de guǎn lǐ zhě yòng zhè zhǒng yǐn yīng tou jiāng de luó jí lái zhì lǐ shè huì qǐng dǎo zhì shén me wēi hài",
        qEn: "Based on the story's conclusion, what danger arises if societal leaders run a nation with this 'infant-throwing' logic?",
        sZh: [
            "1. 对应总结句“亦必悖矣”的深层含义。",
            "2. 说明用这种僵死、不符合实际的观念去盲目管理世间政事，必然会把一切搞砸、带来无穷的灾难与错误（必悖）。"
        ],
        sPy: [
            "duì yìng zǒng jié jù yì bì bèi yǐ de shēn céng hán yì",
            "shuō míng yòng zhè zhǒng jiāng sǐ bù fú hé shí jì de guān niàn qù máng mù guǎn lǐ shì jiān zhèng shì bì rán huì bǎ yī qiè gǎo zá dài lái wú qióng de zāi nàn yǔ cuò wù bì bèi"
        ],
        sEn: "Step 1: Trace the deeper implication of 'yì bì bèi yǐ' (will inevitably turn out chaotic).<br>Step 2: Explain that forcing stagnant formulas onto volatile real-world issues results in total systemic ruin.",
        aZh: "如果治理社会也用这种生搬硬套的方法，必然会严重违背客观的规律和事实，最终把所有的国家政事全部彻底搞砸，带来颠倒荒谬的严重失败灾难。",
        aPy: "rú guǒ zhì lǐ shè huì yě yòng zhè zhǒng shēng bān yìng tào de fāng fǎ bì rán huì yán zhòng wéi bèi kè guān de guān lǜ hé shì shí zuì zhōng bǎ suǒ yǒu de guó jiā zhèng shì quán bù chè dǐ gǎo zá dài lái diān dǎo huāng miù de yán zhòng shī bài zāi nàn",
        aEn: "Governing a society with such rigid formulas violates natural laws and ongoing logic, ultimately rendering all public policies utterly broken and leading to chaotic crises."
    },
    {
        id: "Q5",
        qZh: "大马中学生在日常学习或者挑选未来的合作伙伴、朋友时，能从这篇故事中获得什么生活智慧？",
        qPy: "dà mǎ zhōng xué shēng zài rì cháng xué xí huò zhě tiāo xuǎn wèi lái de hé zuò huǒ bàn péng yǒu shí néng cóng zhè piān gù shì zhōng huò dé shén me shēng huó zhì huì",
        qEn: "What wisdom can Malaysian secondary students gather from this narrative when choosing academic peers or personal friends?",
        sZh: [
            "1. 提炼核心人生启示：看一个人或一件事不能只看他的家庭背景或长辈的优势，必须要看他后天真正的个人实力与努力。",
            "2. 结合考场或学校实际例子：比如我们在学校挑选合作做课题的组员时，不能因为他的父母是高官或高学历就盲目觉得他也很强，必须脚踏实地考察他本人的态度和真正的学习执行力。"
        ],
        sPy: [
            "tí liàn hé xīn rén shēng qǐ shì kàn yī gè rén huò yī jiàn shì bù néng zhǐ kàn tā de jiā tíng bèi jǐng huò zhǎng bèi de yōu shì bì xū yào kàn tā hòu tiān zhēn zhèng de gè rén shí lì yǔ nǔ lì",
            "jié hé kǎo chǎng huò xué xiào shí jì lì zǐ bǐ rú wǒ men zài xué xiào tiāo xuǎn hé zuò zuò kè tí de zǔ yuán shí bù néng yīn wèi tā de fù mǔ shì gāo guān huò gāo xué lì jiù máng mù jué dé tā yě hěn qiáng bì xū jiǎo tà shí dì kǎo chá tā běn rén de tài dù hé zhēn zhèng de xué xí zhí xíng lì"
        ],
        sEn: "Step 1: Extract the moral truth: assess individuals by their actual conduct and learning, never purely on lineage.<br>Step 2: Apply to school teamwork: when selecting partners for a school project, don't blindly recruit someone just because their parents are prominent; evaluate their personal reliability instead.",
        aZh: "启示我们看人绝不能盲目迷信其家庭背景或父母的厉害。例如在学校挑选做课题的组员时，不能因为他父母学历高就盲目组队，必须实事求是地考察他个人的真实学习执行力与负责态度。",
        aPy: "qǐ shì wǒ men kàn rén jué bù néng máng mù mí xìn qí jiā tíng bèi jǐng huò fù mǔ de lì hài lì rú zài xué xiào tiāo xuǎn zuò kè tí de zǔ yuán shí bù néng yīn wèi tā fù mǔ xué lì gāo jiù máng mù zǔ duì bì xū shí shì qiú shì de kǎo chá tā gè rén de zhēn shí xué xí zhí xíng lì yǔ fù zé tài dù",
        aEn: "It trains us never to gauge a peer's competence solely by their family background. For example, when picking group mates for a project, do not blindly assign someone just because their parents are elite; inspect their own diligence and capacity."
    }
];
