const mapping = [
    {p:/ද්‍රෝ/g,r:"føda"},{p:/ඤූ/g,r:"ü"},{p:/ඣි/g,r:"¯"},{p:/!/g,r:"æ"},{p:/\*/g,r:"³"},
    {p:/x/g,r:"·"},{p:/º/g,r:"Ÿ"},{p:/X/g,r:"º"},{p:/i/g,r:"µ"},{p:/I/g,r:"¸"},
    {p:/v/g,r:"¶"},{p:/V/g,r:"¹"},{p:/•/g,r:"²"},{p:/ර්‍ය/g,r:"©"},{p:/ද්‍රෞ/g,r:"fø!"},
    {p:/ද්‍රෙ/g,r:"fø"},{p:/ද්‍රේ/g,r:"føa"},{p:/ද්‍රො/g,r:"fød"},{p:/ද්‍ර/g,r:"ø"},{p:/,/g,r:"￦"},
    {p:/\'/g,r:"z"},{p:/\(/g,r:"^"},{p:/\)/g,r:"&"},{p:/%/g,r:"]"},{p:/\//g,r:"$"},
    {p:/–/g,r:"-"},{p:/\?/g,r:"@"},{p:/\=/g,r:"}"},{p:/\./g,r:"'"},{p:/\+/g,r:"¬"},
    {p:/\:/g,r:"("},{p:/\÷/g,r:"­"},{p:/\;/g,r:"¦"},{p:/ත්‍රෛ/g,r:"ff;%"},{p:/ශෛ/g,r:"ffY"},
    {p:/චෛ/g,r:"ffp"},{p:/ජෛ/g,r:"ffc"},{p:/කෛ/g,r:"ffl"},{p:/මෛ/g,r:"ffu"},{p:/පෛ/g,r:"ffm"},
    {p:/දෛ/g,r:"ffo"},{p:/תෛ/g,r:"ff;"},{p:/නෛ/g,r:"ffk"},{p:/ධෛ/g,r:"ffO"},{p:/වෛ/g,r:"ffj"},
    {p:/ප්‍රෞ/g,r:"fm%!"},{p:/ක්‍ෂ්‍යෝ/g,r:"fÌHda"},{p:/ෂ්‍යෝ/g,r:"fIHda"},{p:/ඡ්‍යෝ/g,r:"fPHda"},{p:/ඪ්‍යෝ/g,r:"fVHda"},
    {p:/ඝ්‍යෝ/g,r:"f>Hda"},{p:/ඛ්‍යෝ/g,r:"fLHda"},{p:/ළ්‍යෝ/g,r:"f<Hda"},{p:/ඵ්‍යෝ/g,r:"fMHda"},{p:/ඨ්‍යෝ/g,r:"fGHda"},
    {p:/ශ්‍යෝ/g,r:"fYHda"},{p:/බ්‍යෝ/g,r:"fnHda"},{p:/ච්‍යෝ/g,r:"fpHda"},{p:/ඩ්‍යෝ/g,r:"fâHda"},{p:/ෆ්‍යෝ/g,r:"f*Hda"},
    {p:/ග්‍යෝ/g,r:"f.Hda"},{p:/ජ්‍යෝ/g,r:"fcHda"},{p:/ක්‍යෝ/g,r:"flHda"},{p:/ල්‍යෝ/g,r:"f,Hda"},{p:/ම්‍යෝ/g,r:"fuHda"},
    {p:/න්‍යෝ/g,r:"fkHda"},{p:/ප්‍යෝ/g,r:"fmHda"},{p:/ද්‍යෝ/g,r:"foHda"},{p:/ස්‍යෝ/g,r:"fiHda"},{p:/ට්‍යෝ/g,r:"fgHda"},
    {p:/ව්‍යෝ/g,r:"fjHda"},{p:/ත්‍යෝ/g,r:"f;Hda"},{p:/භ්‍යෝ/g,r:"fNHda"},{p:/ධ්‍යෝ/g,r:"fOHda"},{p:/ථ්‍යෝ/g,r:"f:Hda"},
    {p:/ක්‍ෂ්‍යො/g,r:"fÌHd"},{p:/ෂ්‍යො/g,r:"fIHd"},{p:/ශ්‍යො/g,r:"fYHd"},{p:/ඛ්‍යො/g,r:"fLHd"},{p:/බ්‍යො/g,r:"fnHd"},
    {p:/ව්‍යො/g,r:"fjHd"},{p:/ඩ්‍යො/g,r:"fvHd"},{p:/ෆ්‍යො/g,r:"f*Hd"},{p:/ග්‍යො/g,r:"f.Hd"},{p:/ජ්‍යො/g,r:"fcHd"},
    {p:/ක්‍යො/g,r:"flHd"},{p:/ම්‍යො/g,r:"fuHd"},{p:/ප්‍යො/g,r:"fmHd"},{p:/ද්‍යො/g,r:"foHd"},{p:/ස්‍යො/g,r:"fiHd"},
    {p:/ට්‍යො/g,r:"fgHd"},{p:/ව්‍යො/g,r:"fjHd"},{p:/ත්‍යො/g,r:"f;Hd"},{p:/භ්‍යො/g,r:"fNHd"},{p:/ධ්‍යො/g,r:"fOHd"},
    {p:/ථ්‍යො/g,r:"f:Hd"},{p:/ෂ්‍යෙ/g,r:"fI H"},{p:/ඡ්‍යෙ/g,r:"fPH"},{p:/ළ්‍යෙ/g,r:"f<H"},{p:/ණ්‍යෙ/g,r:"fKH"},
    {p:/ච්‍යෙ/g,r:"fpH"},{p:/ල්‍යෙ/g,r:"f,H"},{p:/න්‍යෙ/g,r:"fkH"},{p:/ශ්‍යෙ/g,r:"fYH"},{p:/ඛ්‍යෙ/g,r:"fLH"},
    {p:/ක්‍ෂ්යෙ/g,r:"fÌH"},{p:/බ්‍යෙ/g,r:"fnH"},{p:/ඩ්‍යෙ/g,r:"fvH"},{p:/ෆ්‍යෙ/g,r:"f*H"},{p:/ග්‍යෙ/g,r:"f.H"},
    {p:/ජ්‍යෙ/g,r:"fcH"},{p:/ක්‍යෙ/g,r:"flH"},{p:/ම්‍යෙ/g,r:"fuH"},{p:/ප්‍යෙ/g,r:"fmH"},{p:/ද්‍යෙ/g,r:"foH"},
    {p:/ස්‍යෙ/g,r:"fiH"},{p:/ට්‍යෙ/g,r:"fgH"},{p:/ව්‍යෙ/g,r:"fjH"},{p:/ත්‍යෙ/g,r:"f;H"},{p:/භ්‍යෙ/g,r:"fNH"},
    {p:/ධ්‍යෙ/g,r:"fOH"},{p:/ථ්‍යෙ/g,r:"f:H"},{p:/ක්‍ෂ්‍රෝ/g,r:"fÌ%da"},{p:/ෂ්‍රෝ/g,r:"fI%da"},{p:/ඝ්‍රෝ/g,r:"f>%da"},
    {p:/ශ්‍රෝ/g,r:"fY%da"},{p:/බ්‍රෝ/g,r:"fn%da"},{p:/බ්‍රො/g,r:"fn%d"},{p:/ඩ්‍රෝ/g,r:"fv%da"},{p:/ෆ්‍රෝ/g,r:"f*%da"},
    {p:/ග්‍රෝ/g,r:"f.%da"},{p:/ක්‍රෝ/g,r:"fl%da"},{p:/ප්‍රෝ/g,r:"fm%da"},{p:/ස්‍රෝ/g,r:"fi%da"},{p:/ට්‍රෝ/g,r:"fg%da"},
    {p:/ත්‍රෝ/g,r:"f;%da"},{p:/ධ්‍රෝ/g,r:"fO%da"},{p:/ශ්‍රො/g,r:"fY%d"},{p:/ඩ්‍රො/g,r:"fv%d"},{p:/ෆ්‍රො/g,r:"f*%d"},
    {p:/ග්‍රො/g,r:"f.%d"},{p:/ක්‍රො/g,r:"fl%d"},{p:/ප්‍රො/g,r:"fm%d"},{p:/ස්‍රො/g,r:"fi%d"},{p:/ට්‍රො/g,r:"fg%d"},
    {p:/ත්‍රො/g,r:"f;%d"},{p:/ධ්‍රො/g,r:"fO%d"},{p:/බ්‍රේ/g,r:"fí%"},{p:/ඩ්‍රේ/g,r:"fâ%"},{p:/ෆ්‍රේ/g,r:"f*a%"},
    {p:/ග්‍රේ/g,r:"f.a%"},{p:/ක්‍රේ/g,r:"fla%"},{p:/ප්‍රේ/g,r:"fma%"},{p:/ස්‍රේ/g,r:"fia%"},{p:/ත්‍රේ/g,r:"f;a%"},
    {p:/ධ්‍රේ/g,r:"fè%"},{p:/ෂ්‍රෙ/g,r:"fI%"},{p:/ශ්‍රෙ/g,r:"fY%"},{p:/ශ්‍රේ/g,r:"fY%a"},{p:/බ්‍රෙ/g,r:"fn%"},
    {p:/ෆ්‍රෙ/g,r:"f*%"},{p:/ග්‍රෙ/g,r:"f.%"},{p:/ක්‍රෙ/g,r:"fl%"},{p:/ප්‍රෙ/g,r:"fm%"},{p:/ස්‍රෙ/g,r:"fi%"},
    {p:/ත්‍රෙ/g,r:"f;%"},{p:/භ්‍රෙ/g,r:"fN%"},{p:/ධ්‍රෙ/g,r:"fO%"},{p:/්‍ය/g,r:"H"},{p:/බ්‍රි/g,r:"ì%"},
    {p:/්‍ර/g,r:"%"},{p:/ෂෞ/g,r:"fI!"},{p:/ඡෞ/g,r:"fP!"},{p:/ශෞ/g,r:"fY!"},{p:/බෞ/g,r:"fn!"},
    {p:/චෞ/g,r:"fp!"},{p:/ඩෞ/g,r:"fv!"},{p:/ෆෞ/g,r:"f*!"},{p:/ගෞ/g,r:"f.!"},{p:/ජෞ/g,r:"fc!"},
    {p:/කෞ/g,r:"fl!"},{p:/ලෞ/g,r:"f,!"},{p:/මෞ/g,r:"fu!"},{p:/නෞ/g,r:"fk!"},{p:/පෞ/g,r:"fm!"},
    {p:/දෞ/g,r:"fo!"},{p:/රෞ/g,r:"fr!"},{p:/සෞ/g,r:"fi!"},{p:/ටෞ/g,r:"fg!"},{p:/තෞ/g,r:"f;!"},
    {p:/භෞ/g,r:"fN!"},{p:/ඤෞ/g,r:"f[!"},{p:/ක්‍ෂෝ/g,r:"fÌda"},{p:/ෂෝ/g,r:"fIda"},{p:/ඹෝ/g,r:"fUda"},
    {p:/ඡෝ/g,r:"fPda"},{p:/ඪෝ/g,r:"fVda"},{p:/ඝෝ/g,r:"f>da"},{p:/ඛෝ/g,r:"fLda"},{p:/ළෝ/g,r:"f<da"},
    {p:/ඟෝ/g,r:"fÛda"},{p:/ණෝ/g,r:"fKda"},{p:/ඵෝ/g,r:"fMda"},{p:/ඨෝ/g,r:"fGda"},{p:/ඬෝ/g,r:"f~da"},
    {p:/ශෝ/g,r:"fYda"},{p:/ඥෝ/g,r:"f{da"},{p:/ඳෝ/g,r:"f|da"},{p:/බෝ/g,r:"fnda"},{p:/චෝ/g,r:"fpda"},
    {p:/ඩෝ/g,r:"fvda"},{p:/ෆෝ/g,r:"f*da"},{p:/ගෝ/g,r:"f.da"},{p:/හෝ/g,r:"fyda"},{p:/ජෝ/g,r:"fcda"},
    {p:/කෝ/g,r:"flda"},{p:/ලෝ/g,r:"f,da"},{p:/මෝ/g,r:"fuda"},{p:/නෝ/g,r:"fkda"},{p:/පෝ/g,r:"fmda"},
    {p:/දෝ/g,r:"foda"},{p:/රෝ/g,r:"frda"},{p:/සෝ/g,r:"fida"},{p:/ටෝ/g,r:"fgda"},{p:/වෝ/g,r:"fjda"},
    {p:/තෝ/g,r:"f;da"},{p:/භෝ/g,r:"fNda"},{p:/යෝ/g,r:"fhda"},{p:/ඤෝ/g,r:"f[da"},{p:/ධෝ/g,r:"fOda"},
    {p:/ථෝ/g,r:"f:da"},{p:/ක්‍ෂො/g,r:"fÌd"},{p:/ෂො/g,r:"fId"},{p:/ඹො/g,r:"fUd"},{p:/ඡො/g,r:"fPd"},
    {p:/ඪො/g,r:"fVd"},{p:/ඝො/g,r:"f>d"},{p:/ඛො/g,r:"fLd"},{p:/ළො/g,r:"f<d"},{p:/ඟො/g,r:"fÕd"},
    {p:/ණො/g,r:"fKd"},{p:/ඵො/g,r:"fMd"},{p:/ඨො/g,r:"fGd"},{p:/ඬො/g,r:"f~da"},{p:/ශො/g,r:"fYd"},
    {p:/ඥො/g,r:"f{d"},{p:/ඳො/g,r:"f|d"},{p:/බො/g,r:"fnd"},{p:/චො/g,r:"fpd"},{p:/ඩො/g,r:"fvd"},
    {p:/ෆො/g,r:"f*d"},{p:/ගො/g,r:"f.d"},{p:/හො/g,r:"fyd"},{p:/ජො/g,r:"fcd"},{p:/කො/g,r:"fld"},
    {p:/ලො/g,r:"f,d"},{p:/මො/g,r:"fud"},{p:/නො/g,r:"fkd"},{p:/පො/g,r:"fmd"},{p:/දො/g,r:"fod"},
    {p:/රො/g,r:"frd"},{p:/සො/g,r:"fid"},{p:/ටො/g,r:"fgd"},{p:/වො/g,r:"fjd"},{p:/තො/g,r:"f;d"},
    {p:/භො/g,r:"fNd"},{p:/යො/g,r:"fhd"},{p:/ඤො/g,r:"f[d"},{p:/ධො/g,r:"fOd"},{p:/ථො/g,r:"f:d"},
    {p:/ක්‍ෂේ/g,r:"fÌa"},{p:/ෂේ/g,r:"fIa"},{p:/ඹේ/g,r:"fò"},{p:/ඡේ/g,r:"fþ"},{p:/ඪේ/g,r:"fa"},
    {p:/ඝේ/g,r:"f>a"},{p:/ඛේ/g,r:"fÄ"},{p:/ළේ/g,r:"f<a"},{p:/ගේ/g,r:"f.a"},{p:/ඟේ/g,r:"fÕa"},
    {p:/ණේ/g,r:"fKa"},{p:/ඵේ/g,r:"fMa"},{p:/ඨේ/g,r:"fGa"},{p:/ඬේ/g,r:"få"},{p:/ශේ/g,r:"fYa"},
    {p:/ඥේ/g,r:"f{a"},{p:/ඳේ/g,r:"f|a"},{p:/බේ/g,r:"fí"},{p:/චේ/g,r:"fÉ"},{p:/ඩේ/g,r:"fâ"},
    {p:/ෆේ/g,r:"f*"},{p:/ගේ/g,r:"f.a"},{p:/හේ/g,r:"fya"},{p:/පේ/g,r:"fma"},{p:/කේ/g,r:"fla"},
    {p:/ලේ/g,r:"f,a"},{p:/මේ/g,r:"fï"},{p:/නේ/g,r:"fka"},{p:/ජේ/g,r:"fÊ"},{p:/දේ/g,r:"foa"},
    {p:/රේ/g,r:"f¾"},{p:/සේ/g,r:"fia"},{p:/ටේ/g,r:"fÜ"},{p:/වේ/g,r:"fõ"},{p:/තේ/g,r:"f;a"},
    {p:/භේ/g,r:"fNa"},{p:/යේ/g,r:"fha"},{p:/ඤේ/g,r:"f[a"},{p:/ධේ/g,r:"fè"},{p:/ථේ/g,r:"f:a"},
    {p:/ක්‍ෂෙ/g,r:"fÌ"},{p:/ෂෙ/g,r:"fI"},{p:/ඹෙ/g,r:"fU"},{p:/ඓ/g,r:"ft"},{p:/ඡෙ/g,r:"fP"},
    {p:/ඪෙ/g,r:"fV"},{p:/ඝෙ/g,r:"f>"},{p:/ඛෙ/g,r:"fn"},{p:/ළෙ/g,r:"f<"},{p:/ඟෙ/g,r:"fÕ"},
    {p:/ණෙ/g,r:"fK"},{p:/ඵෙ/g,r:"fM"},{p:/ඨෙ/g,r:"fG"},{p:/ඬෙ/g,r:"f~"},{p:/ශෙ/g,r:"fY"},
    {p:/ඥෙ/g,r:"f{"},{p:/ඳෙ/g,r:"f|"},{p:/බෙ/g,r:"fn"},{p:/චෙ/g,r:"fp"},{p:/ඩෙ/g,r:"fv"},
    {p:/ෆෙ/g,r:"f*"},{p:/ගෙ/g,r:"f."},{p:/හෙ/g,r:"fy"},{p:/ජෙ/g,r:"fc"},{p:/කෙ/g,r:"fl"},
    {p:/ලෙ/g,r:"f,"},{p:/මෙ/g,r:"fu"},{p:/නෙ/g,r:"fk"},{p:/පෙ/g,r:"fm"},{p:/දෙ/g,r:"fo"},
    {p:/රෙ/g,r:"fr"},{p:/සෙ/g,r:"fi"},{p:/ටෙ/g,r:"fg"},{p:/වෙ/g,r:"fj"},{p:/තෙ/g,r:"f;"},
    {p:/භෙ/g,r:"fN"},{p:/යෙ/g,r:"fh"},{p:/ඤෙ/g,r:"f["},{p:/ධෙ/g,r:"fO"},{p:/තු/g,r:";="},
    {p:/ශු/g,r:"Y="},{p:/භු/g,r:"N="},{p:/ගු/g,r:".="},{p:/කු/g,r:"l="},{p:/තූ/g,r:";+"},
    {p:/ශූ/g,r:"Y+"},{p:/භූ/g,r:"N+"},{p:/ගූ/g,r:".+"},{p:/කූ/g,r:"l+"},{p:/රු/g,r:"re"},
    {p:/රූ/g,r:"rE"},{p:/ආ/g,r:"wd"},{p:/ඇ/g,r:"we"},{p:/ඈ/g,r:"wE"},{p:/ඌ/g,r:"W!"},
    {p:/ඖ/g,r:"T!"},{p:/ඒ/g,r:"ta"},{p:/ඕ/g,r:"´"},{p:/ඳි/g,r:"¢"},{p:/ඳී/g,r:"£"},
    {p:/දූ/g,r:"¥"},{p:/දී/g,r:"§"},{p:/ලූ/g,r:"Æ"},{p:/ඳූ/g,r:"ª"},{p:/ර්‍ණ/g,r:"“"},
    {p:/ර්/g,r:"¾"},{p:/ඨි/g,r:"À"},{p:/ඨී/g,r:"Á"},{p:/ඡී/g,r:"Â"},{p:/ඛ්/g,r:"Ä"},
    {p:/ඛි/g,r:"Å"},{p:/ලු/g,r:"¨‍"},{p:/ඛී/g,r:"Ç"},{p:/දි/g,r:"È"},{p:/ච්/g,r:"É"},
    {p:/ජ්/g,r:"Ê"},{p:/රී/g,r:"Í"},{p:/ඪි/g,r:"Î"},{p:/ඪී/g,r:"Ð"},{p:/චි/g,r:"Ñ"},
    {p:/ථී/g,r:"Ò"},{p:/ථී/g,r:"Ó"},{p:/ජී/g,r:"Ô"},{p:/චී/g,r:"Ö"},{p:/ඞ්/g,r:"Ù"},
    {p:/ඵී/g,r:"Ú"},{p:/ට්/g,r:"Ü"},{p:/ඵි/g,r:"Ý"},{p:/රි/g,r:"ß"},{p:/ටී/g,r:"à"},
    {p:/ටි/g,r:"á"},{p:/ඩ්/g,r:"â"},{p:/ඩී/g,r:"ã"},{p:/ඩි/g,r:"ä"},{p:/ඬ්/g,r:"å"},
    {p:/ඬි/g,r:"ç"},{p:/ධ්/g,r:"è"},{p:/ඬී/g,r:"é"},{p:/ධි/g,r:"ê"},{p:/ධී/g,r:"ë"},
    {p:/ථි/g,r:"Ó"},{p:/බි/g,r:"ì"},{p:/බ්/g,r:"í"},{p:/බී/g,r:"î"},{p:/ම්/g,r:"ï"},
    {p:/ජි/g,r:"ð"},{p:/මි/g,r:"ñ"},{p:/ඹ්/g,r:"ò"},{p:/මී/g,r:"ó"},{p:/ඹි/g,r:"ô"},
    {p:/ව්/g,r:"õ"},{p:/ඹී/g,r:"ö"},{p:/ඳු/g,r:"÷"},{p:/වී/g,r:"ù"},{p:/ඟු/g,r:"Õ=‍"},
    {p:/ඟූ/g,r:"Õ+"},{p:/වි/g,r:"ú"},{p:/ඞ්/g,r:"û"},{p:/ඡි/g,r:"ý"},{p:/ඡ්/g,r:"þ"},
    {p:/දු/g,r:"ÿ"},{p:/ණී/g,r:"Œ"},{p:/ණි/g,r:"‚"},{p:/ජී/g,r:"Ô"},{p:/ඡි/g,r:"ð"},
    {p:/ඩි/g,r:"ä"},{p:/ඤු/g,r:"û"},{p:/ග/g,r:"."},{p:/ළු/g,r:"¿"},{p:/ක්‍ෂ/g,r:"Ì"},
    {p:/ෂ/g,r:"I"},{p:/ං/g,r:"x"},{p:/ඃ/g,r:"#"},{p:/ඹ/g,r:"U"},{p:/ඡ/g,r:"P"},
    {p:/ඪ/g,r:"V"},{p:/ඝ/g,r:">"},{p:/ඊ/g,r:"B"},{p:/ඣ/g,r:"CO"},{p:/ඛ/g,r:"L"},
    {p:/ළ/g,r:"<"},{p:/ඟ/g,r:"Õ"},{p:/ණ/g,r:"K"},{p:/ඵ/g,r:"M"},{p:/ඨ/g,r:"G"},
    {p:/ඃ/g,r:"#"},{p:/\"/g,r:"˜‍"},{p:/\//g,r:"$"},{p:/\)/g,r:"&"},{p:/:/g,r:"("},
    {p:/-/g,r:"-"},{p:/ෆ/g,r:"*"},{p:/ල/g,r:","},{p:/-/g,r:"-"},{p:/රැ/g,r:"/"},
    {p:/ථ/g,r:":"},{p:/ත‍/g,r:"F"},{p:/ත/g,r:";"},{p:/ළ/g,r:"<"},{p:/ඝ/g,r:">"},
    {p:/රෑ/g,r:"?"},{p:/ඊ/g,r:"B"},{p:/ක‍/g,r:"C"},{p:/‍ෘ/g,r:"D"},{p:/ෑ/g,r:"E"},
    {p:/ඨ/g,r:"G"},{p:/්‍ය/g,r:"H"},{p:/ෂ/g,r:"I"},{p:/ඬ/g,r:"~"},{p:/න‍/g,r:"J"},
    {p:/ණ/g,r:"K"},{p:/ඛ/g,r:"L"},{p:/ඵ/g,r:"M"},{p:/භ/g,r:"N"},{p:/ධ/g,r:"O"},
    {p:/ඡ/g,r:"P"},{p:/ඍ/g,r:"R"},{p:/ඔ/g,r:"T"},{p:/ඹ/g,r:"U"},{p:/ඪ/g,r:"V"},
    {p:/උ/g,r:"W"},{p:/ශ/g,r:"Y"},{p:/ඤ/g,r:"["},{p:/ඉ/g,r:"b"},{p:/ජ/g,r:"c"},
    {p:/ට/g,r:"g"},{p:/ය/g,r:"h"},{p:/ස/g,r:"i"},{p:/ව/g,r:"j"},{p:/න/g,r:"k"},
    {p:/ක/g,r:"l"},{p:/ප/g,r:"m"},{p:/බ/g,r:"n"},{p:/ද/g,r:"o"},{p:/ච/g,r:"p"},
    {p:/ර/g,r:"r"},{p:/එ/g,r:"t"},{p:/ම/g,r:"u"},{p:/ඩ/g,r:"v"},{p:/අ/g,r:"w"},
    {p:/හ/g,r:"y"},{p:/ඥ/g,r:"{"},{p:/ඳ/g,r:"|"},{p:/ැ/g,r:"e"},{p:/ෑ/g,r:"E"},
    {p:/ෙ/g,r:"f"},{p:/ු/g,r:"q"},{p:/ි/g,r:"s"},{p:/ූ/g,r:"Q"},{p:/ී/g,r:"S"},
    {p:/ෘ/g,r:"D"},{p:/ෲ/g,r:"DD"},{p:/ෟ/g,r:"!"},{p:/ා/g,r:"d"},{p:/යෞ/g,r:"fh!"},
    {p:/්/g,r:"a"},{p:/￦/g,r:'"'},{p:/\ufffd/g,r:"z"},{p:/￫/g,r:"^"},{p:/￩/g,r:"&"},
    {p:/ￔ/g,r:")"},{p:/ￓ/g,r:"@"},{p:/ￒ/g,r:"`"},{p:/ￏ/g,r:"}"},{p:/ￎ/g,r:"'"},
    {p:/\\ￍ/g,r:"¤"},{p:/\\ￌ/g,r:"•"},{p:/\\ￊ/g,r:"›"},{p:/\\ﾶ/g,r:"∙"},{p:/ￕ/g,r:"]"},
    {p:/ඏ/g,r:"Ì"},{p:/ඐ/g,r:"Ï"},{p:/ඦ/g,r:"`c"},{p:/“/g,r:"—"},{p:/”/g,r:"˜"},
    {p:/`ca/g,r:"`Ê"},{p:/`cs/g,r:"`ð"},{p:/hෞ/g,r:"fh!"},{p:/:f/g,r:"f:"},{p:/f\(a/g,r:"f:a"},
    {p:/f\(d/g,r:"f:d"}
];

function convert(unicodeText, preserveEnglish) {
    if (!preserveEnglish) {
        return mapping.reduce((result, { p, r }) => result.replace(p, r), unicodeText);
    }

    // Improved tokenization: split by Sinhala character blocks
    // This allows mixed words like "sinhala/english" to be handled correctly
    const tokens = unicodeText.split(/([\u0d80-\u0dff\u200d\u200c]+)/);
    return tokens.map(token => {
        if (/[\u0d80-\u0dff]/.test(token)) {
            return mapping.reduce((result, { p, r }) => result.replace(p, r), token);
        }
        return token;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('unicode-input');
    const outputArea = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const copyFormattedBtn = document.getElementById('copy-formatted-btn');
    const copyStatus = document.getElementById('copy-status');
    const preserveToggle = document.getElementById('preserve-english');
    const previewArea = document.getElementById('preview');

    const updateConversion = () => {
        const unicodeText = inputArea.value;
        const convertedText = convert(unicodeText, preserveToggle.checked);
        outputArea.value = convertedText;

        // Smart Preview Logic
        renderPreview(unicodeText, preserveToggle.checked);
    };

    const renderPreview = (text, preserveEnglish) => {
        previewArea.innerHTML = '';

        if (!text) {
            previewArea.innerHTML = '<span class="text-muted" style="font-size: 1rem; font-family: Inter;">Start typing to see the preview...</span>';
            return;
        }

        if (!preserveEnglish) {
            // Global conversion mode: everything is legacy font
            const span = document.createElement('span');
            span.className = 'font-legacy';
            span.textContent = mapping.reduce((result, { p, r }) => result.replace(p, r), text);
            previewArea.appendChild(span);
            return;
        }

        // Smart split to handle words mixed with punctuation/slashes
        const tokens = text.split(/([\u0d80-\u0dff\u200d\u200c]+)/);
        
        tokens.forEach(token => {
            if (!token) return;
            const span = document.createElement('span');
            const hasSinhala = /[\u0d80-\u0dff]/.test(token);

            if (hasSinhala) {
                span.className = 'font-legacy';
                span.textContent = mapping.reduce((result, { p, r }) => result.replace(p, r), token);
            } else {
                span.className = 'font-std';
                span.textContent = token;
            }
            previewArea.appendChild(span);
        });
    };

    // Real-time conversion
    inputArea.addEventListener('input', updateConversion);
    preserveToggle.addEventListener('change', updateConversion);

    const showCopySuccess = () => {
        copyStatus.classList.add('show');
        setTimeout(() => {
            copyStatus.classList.remove('show');
        }, 2000);
    };

    // Copy Raw ASCII (for legacy software)
    copyBtn.addEventListener('click', () => {
        outputArea.select();
        document.execCommand('copy');
        showCopySuccess();
    });

    // Copy with Formatting (for Word)
    copyFormattedBtn.addEventListener('click', async () => {
        const escapeHTML = (text) => {
            return text.replace(/[&<>"']/g, (m) => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            })[m]);
        };

        try {
            // Create a clean HTML version for the clipboard
            const htmlChunks = Array.from(previewArea.childNodes).map(node => {
                const text = node.textContent;
                if (node.nodeType === Node.TEXT_NODE) return escapeHTML(text);
                
                const isLegacy = node.classList.contains('font-legacy');
                const font = isLegacy ? "'FMAbhaya', serif" : "'Aptos', sans-serif";
                return `<span style="font-family: ${font}; font-size: 14pt;">${escapeHTML(text)}</span>`;
            }).join('');

            const plainText = previewArea.innerText;
            const htmlBlob = new Blob([htmlChunks], { type: 'text/html' });
            const textBlob = new Blob([plainText], { type: 'text/plain' });

            const data = [new ClipboardItem({
                ['text/html']: htmlBlob,
                ['text/plain']: textBlob
            })];

            await navigator.clipboard.write(data);
            showCopySuccess();
        } catch (err) {
            console.error('Failed to copy formatted text: ', err);
            // Fallback to simple copy if Clipboard API fails
            outputArea.select();
            document.execCommand('copy');
            showCopySuccess();
        }
    });
});
