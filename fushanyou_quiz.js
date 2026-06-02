const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“方”的正确含义是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì fāng de zhèng què hán yì shì",
        en: "What is the correct meaning of 'fāng' in the sentence 'jiàn rén fāng yǐn yīng ér'?",
        options: [
            {
                text: "方才、刚刚",
                py: "fāng cái gāng gāng",
                en: "Just now / a moment ago.",
                correct: false,
                explanation: "错误。这里不是指事情已经发生，而是指动作正在进行中。",
                explanationPy: "cuò wù zhè lǐ bú shì zhǐ shì qíng yǐ jīng fā shēng ér shì zhǐ dòng zuò zhèng zài jìn xíng zhōng"
            },
            {
                text: "正、正在",
                py: "zhèng zhèng zài",
                en: "Just / right at the moment of doing something.",
                correct: true,
                explanation: "正确！“方引婴儿”指的是那个人正在拉着婴儿，表动作正在进行。",
                explanationPy: "zhèng què fāng yǐn yīng ér zhǐ de ... nà gè rén zhèng zài lā zhe yīng ér biǎo dòng zuò zhèng zài jìn xíng"
            },
            {
                text: "方向、方位",
                py: "fāng xiàng fāng wèi",
                en: "Direction or position.",
                correct: false,
                explanation: "错误。这是名词用法，在句中修饰动词作状语时不合语法。",
                explanationPy: "cuò wù zhè shì míng cí yòng fǎ zài jù zhōng xiū shì dòng cí zuò zhuàng yǔ shí bù hé yǔ fǎ"
            },
            {
                text: "方法、计谋",
                py: "fāng fǎ jì móu",
                en: "Method, strategy, or recipe.",
                correct: false,
                explanation: "错误。词义完全脱离了拉扯婴儿的动作语境。",
                explanationPy: "cuò wù cí yì wán quán tuō lí le lā chě yīng ér de dòng zuò yǔ jìng"
            }
        ]
    },
    {
        id: 2,
        text: "文中的反问句“其子岂遽善游哉”中，“遽”字的正确用法是？",
        py: "wén zhāng zhōng de fǎn wèn jù qí zǐ qǐ jù shàn yóu zāi zhōng jù zì de zhèng què yòng fǎ shì",
        en: "What is the correct usage of the character 'jù' in the rhetorical question?",
        options: [
            {
                text: "惊慌、害怕、恐惧",
                py: "jīng huāng hài pà kǒng jù",
                en: "Panicked, frightened, or terrified.",
                correct: false,
                explanation: "错误。虽然“遽”在形容表情时有惊慌之意，但在这里是副词用法，修饰善游。",
                explanationPy: "cuò wù suī rán jù zài xíng róng biǎo qíng shí yǒu jīng huāng zhī yì dàn zài zhè lǐ shì fù cí yòng fǎ xiū shì shàn yóu"
            },
            {
                text: "就、立刻、匆忙地",
                py: "jiù lì kè cōng máng de",
                en: "Immediately, then, or naturally.",
                correct: true,
                explanation: "正确！整句话的意思是“他的儿子难道一出生就立刻擅长游泳了吗”，遽表示时间上的立刻、随即。",
                explanationPy: "zhèng què zhěng jù huà de yì si shì tā de ér zǐ nán dào yī chū shēng jiù lì kè shàn cháng yóu yǒng le ma jù biǎo shì shí jiān shàng de lì kè suí jí"
            },
            {
                text: "迅速奔跑的快马",
                py: "xùn sù bēn pǎo de kuài mǎ",
                en: "A galloping courier horse.",
                correct: false,
                explanation: "错误。这是“遽”的名词本义（邮传快马），在句中作为修饰词讲不通。",
                explanationPy: "cuò wù zhè shì jù de míng cí běn yì zài jù zhōng zuò wéi xiū shì cí jiǎng bù tōng"
            },
            {
                text: "距离、路途遥远",
                py: "jù lí lù tú yáo yuǎn",
                en: "Distance, or a long journey.",
                correct: false,
                explanation: "错误。属于没有文言词汇根据的字面瞎猜。",
                explanationPy: "cuò wù shǔ yú méi yǒu wén yán cí huì gēn jù de zì miàn xiā cāi"
            }
        ]
    },
    {
        id: 3,
        text: "对结尾句“亦必悖矣”中的“悖”字解释最准确的是？",
        py: "duì jié wěi jù yì bì bèi yǐ zhōng de bèi zì jiě shì zuì zhǔn quě de shì",
        en: "Which explanation best captures the meaning of 'bèi' in 'yì bì bèi yǐ'?",
        options: [
            {
                text: "悖逆、不孝顺父母",
                py: "bèi nì bú xiào shùn fù mǔ",
                en: "Disobedient or unfilial to parents.",
                correct: false,
                explanation: "错误。在处理客观政事（任物）的宏观语境下，“悖”不代表家庭伦理的不孝。",
                explanationPy: "cuò wù zài chǔ lǐ kè guān zhèng shì de hóng guān yǔ jìng xià bèi bú biǎo shì jiā tíng lún lǐ de bú xiào"
            },
            {
                text: "荒谬、违背常理、矛盾错误",
                py: "huāng miù wéi bèi cháng lǐ máo dùn cuò wù",
                en: "Absurd, counter-intuitive, and failing.",
                correct: true,
                explanation: "正确！意思是这样去管理世间政事，必然会颠倒常理、产生荒谬且矛盾的后果。",
                explanationPy: "zhèng què yì si shì zhè yàng qù guǎn lǐ shì jiān zhèng shì bì rán huì diān dǎo cháng lǐ chǎn shēng huāng miù qiě máo dùn de hòu guǒ"
            },
            {
                text: "悖论、深奥难懂的哲学理论",
                py: "bèi lùn shēn ào nán dǒng de zhé xué lǐ lùn",
                en: "A paradox or deep philosophical theory.",
                correct: false,
                explanation: "错误。文中指的是行为和逻辑的结果彻底坏掉，而不是形容理论的深奥。",
                explanationPy: "cuò wù wén zhāng zhōng zhǐ de ... xíng wéi hé luó jí de jié guǒ chè dǐ huài diào ér bú shì xíng róng lǐ lùn de shēn ào"
            },
            {
                text: "隐瞒、遮掩事实真相",
                py: "yǐn mán zhē yǎn shì shí zhēn xiàng",
                en: "Concealing or covering up the truth.",
                correct: false,
                explanation: "错误。词义完全无法融入客观结论的推演中。",
                explanationPy: "cuò wù cí yì wán quán wú fǎ róng rù kè guān jié lùn de tuī yǎn zhōng"
            }
        ]
    },
    {
        id: 4,
        text: "那个打算把婴儿扔进江里的人，他行为背后的荒唐逻辑是？",
        py: "nà gè dǎ suàn bǎ yīng ér rēng jìn jiāng lǐ de rén tā xíng wéi bèi hòu de huāng táng luó jí shì",
        en: "What was the absurd logic behind the man's attempt to throw the baby into the river?",
        options: [
            {
                text: "认为婴儿太重，船没办法载动他",
                py: "rèn wéi yīng ér tài zhòng chuán méi bàn fǎ zài dòng tā",
                en: "Thinking the baby was too heavy for the boat to carry.",
                correct: false,
                explanation: "错误。文中根本没有提到船，属于脱离文本的干扰项。",
                explanationPy: "cuò wù wén zhāng zhōng gēn bēn méi yǒu tí dào chuán shǔ yú tuō lí wén běn de gān rǎo xiàng"
            },
            {
                text: "认为只要孩子的父亲擅长游泳，刚出生的婴儿也必然天然精通游泳",
                py: "rèn wéi zhǐ yào hái zǐ de fù qīn shàn cháng yóu yǒng gāng chū shēng de yīng ér yě bì rán tiān rán jīng tōng yóu yǒng",
                en: "Believing that since the father is a good swimmer, the newborn baby must naturally inherit the skill.",
                correct: true,
                explanation: "正确！他狡辩说“此其父善游”，盲目把父亲后天练习的本领当成了儿子先天的遗传。",
                explanationPy: "zhèng què tā jiǎo biàn shuō cǐ qí fù shàn yóu máng mù bǎ fù qīn hòu tiān liàn xí de běn lǐng dàng chéng le ér zǐ xiān tiān de yí chuán"
            },
            {
                text: "因为江水非常浅，觉得把婴儿扔下去很好玩",
                py: "yīn wèi jiāng shuǐ fēi cháng qiǎn jué dé bǎ yīng ér rēng xià qù hěn hǎo wán",
                en: "Thinking it was fun because the river water was very shallow.",
                correct: false,
                explanation: "错误。婴儿在大声哭泣（婴儿啼），可见大江非常危险，并非在玩耍。",
                explanationPy: "cuò wù yīng ér zài dà shēng kū qì yīng ér tí kě jiàn dà jiāng fēi cháng wēi xiǎn bìng fēi zài wán shuǎ"
            },
            {
                text: "为了惩罚婴儿，因为婴儿一直在大声哭闹",
                py: "wèi le chéng fá yīng ér yīn wèi yīng ér yī zhí zài dà shēng kū nào",
                en: "To punish the baby because he kept crying loudly.",
                correct: false,
                explanation: "错误。婴儿是因为要被扔进江里才害怕得哭泣，因果关系完全被颠倒了。",
                explanationPy: "cuò wù yīng ér shì yīn wèi yào bèi rēng jìn jiāng lǐ cái hài pà dé kū qì yīn guǒ guān xì wán quán bèi diān dǎo le"
            }
        ]
    },
    {
        id: 5,
        text: "关于这篇寓言故事所采用的写作手法，下列分析最准确的一项是？",
        py: "guān yú zhè piān yù yán gù shì suǒ cǎi yòng de xiě zuò shǒu fǎ xià liè fēn xī zuì zhǔn quě de yī xiàng shì",
        en: "Which of the following is the most accurate analysis of the writing technique used in this fable?",
        options: [
            {
                text: "主要通过详细描写大江的波涛汹涌来吓唬读者",
                py: "zhǔ yào tōng guò xiáng xì miáo xiě dà jiāng de bō tāo xiōng yǒng lái xià hǔ dú zhě",
                en: "Mainly describing the turbulent river to intimidate readers.",
                correct: false,
                explanation: "错误。文中对江水完全没有自然风光的描写，重点在于人物的荒唐对话。",
                explanationPy: "cuò wù wén zhāng zhōng duì jiāng shuǐ wán quán méi yǒu zì rán fēng guāng de miáo xiě zhòng diǎn zài yú rén wù de huāng táng duì huà"
            },
            {
                text: "通过一件极其荒谬的小故事来进行类比论证，深刻讽刺墨守成规的统治者",
                py: "tōng guò yī jiàn jí qí huāng miù de xiǎo gù shì lái jìn xíng lèi bǐ lùn zhèng shēn kè fěng cì mò shǒu chéng guī de tǒng zhì zhě",
                en: "Using an absurd story for analogical reasoning to criticize dogmatic rulers.",
                correct: true,
                explanation: "正确！文章属于经典的先叙事后议论，用“引婴投江”的笑话来类比那些不看时代变化而生搬硬套（以此任物）的决策者，一针见血。",
                explanationPy: "zhèng què wén zhāng shǔ yú jīng diǎn de xiān xù shì hòu yì lùn yòng yǐn yīng tou jiāng de xiào huà lái lèi bǐ nà xiē bú kàn shí dài biàn huà ér shēng bān yìng tào de jué cè zhě yī zhēn jiàn xiě"
            },
            {
                text: "全文只采用了议论，没有任何故事情节和神态刻画",
                py: "quán wén zhǐ cǎi yòng le yì lùn méi yǒu rèn hé gù shì qíng jié hé shén tài kè huà",
                en: "Using only commentary without any plot lines or expressions.",
                correct: false,
                explanation: "错误。前半部分写了婴儿哭泣、路人发问，充满了生动的叙事要素。",
                explanationPy: "cuò wù qián bàn bù fèn xiě le yīng ér kū qì lù rén fā wèn chōng mǎn le shēng dòng de xù shì yào sù"
            },
            {
                text: "引用了大量古代名人的语录，以此增强说服力",
                py: "yǐn yòng le dà liàng gǔ dài míng rén de yǔ lù yǐ cǐ zēng qiáng shuō fú lì",
                en: "Quoting ancient celebrities heavily to enhance persuasiveness.",
                correct: false,
                explanation: "错误。文中完全没有引用任何名人名言，而是直接通过反问进行逻辑推理。",
                explanationPy: "cuò wù wén zhāng zhōng wán quán méi yǒu yǐn yòng rèn hé míng rén míng yán ér shì zhí jiē tōng guò fǎn wèn jìn xíng luó jí tuī lǐ"
            }
        ]
    }
];
