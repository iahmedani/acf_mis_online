function pushData(url){
    $.ajax({
      url,
      success:(data)=>{
        $('#tChildScrActive_M').text().replaceWith(data[0].tChildScrActive_M);
      }
    })
  }

  [
{
tChildScrActive_M: 5,
tChildScrActive_F: 1,
tPlwScrActive_P: 0,
tPlwScrActive_L: 0,
tChildScrPassive_M: 5,
tChildScrPassive_F: 1,
tPlwScrPassive_P: 0,
tPlwScrPassive_L: 0,
ChildScrActive_M115: 3,
ChildScrActive_F115: 0,
ChildScrActive_M115124: 0,
ChildScrActive_F115124: 0,
PlwScrActive_P21: 0,
PlwScrActive_L21: 0,
ChildScrPassive_M115: 0,
ChildScrPassive_F115: 0,
ChildScrPassive_M115124: 0,
tChildScrPassive_F115124: 0,
PlwScrPassive_P21: 1,
PlwScrPassive_L21: 0
}
]