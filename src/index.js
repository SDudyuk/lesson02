'number' + 23 + 32
/*
'number' + 23 + 32 = 'number23' + 32 = 'number2332'
*/
41 + 1 + 'number'
/*
41 + 1 + 'number' = 42 + 'number' = '42number'
*/
null + 1
/*
null + 1 = 1 (null - відсутнє значення)
*/
'five' + + 'two'
/*
унарний + має вищий пріорітет, тому спочатку: + 'two' = NaN
'five' + + 'two' = 'five' + NaN = 'fiveNaN'
*/
2 && 7
/*
всі операнди істинні, тому повертається значення останнього операнда 
2 && 7 = 7
*/
+'40' + +'2'
/*
+'40' + +'2' = 40 + 2 = 42
*/
'10' - 5 === 6
/*
'10' - 5 = 5
5 === 6 - false
*/
true + false
/*
true + false = 1 + 0 = 1
*/
'4px' - 3
/*
'4px' - 3 = Number('4px') - 3 = NaN - 3 = NaN
*/
'4' - 3
/*
'4' - 3 = Number('4') - 3 = 4 - 3 = 1
*/
'2' + 3 ** 2
/*
'2' + 3 ** 2 = '2' + (3 ** 2) = '2' + 9 = '29'
*/
12 / '6'
/*
12 / '6' = 12 / Number('6') = 12 / 6 = 2
*/
23 + 42 + 'number'
/*
23 + 42 + 'number' = 65 + 'number' = '65number'
*/
'10' + (5 === 6)
/*
'10' + (5 === 6) = '10' + false = '10false'
*/
'number' + 15 + 3
/*
'number' + 15 + 3 = 'number15' + 3 = 'number153'
*/
undefined + 1
/*
undefined + 1 = Number(undefined) + 1 = NaN + 1 = NaN
*/
'true' == true
/*
'true' == true
Number('true') == Number(true)
NaN == 1
false
*/
false == 'false'
/*
false == 'false'
Number(false) == Number('false')
0 == NaN
false
*/
null == ''
/*
для нестрогого порівняння == значень undefined і null діє окреме правило: 
ці значення не перетворюються на інші типи, 
вони рівні один одному і не рівні будь-чому іншому
*/
3 ** (9 / 3)
/*
3 ** (9 / 3) = 3 ** 3 = 27
*/
!!'false' == !!'true'
/*
!!'false' == !!'true'
!!(Boolean('false')) == !!(Boolean('true'))
!!true == !!true
true == true
true
*/
0 || '0' && 1
/*
0 || '0' && 1 = 0 || ('0' && 1) = 0 || 1 = 1
*/
1 < 2 < 3
/*
1 < 2 < 3
true < 3
1 < 3
true
*/
'foo'+ + +'bar'
/*
'foo'+ + +'bar' = 'foo'+ + NaN = 'foo'+ NaN = 'fooNaN'
*/
3 ** 2 / 3
/*
3 ** 2 / 3 = (3 ** 2) / 3 = 9 / 3 = 3
*/
1 < 2 > 3
/*
1 < 2 > 3
true > 3
1 > 3
false
*/
(+null == false) < 1
/*
(+null == false) < 1
(0 == false) < 1
true < 1
1 < 1
false
*/
false && true || true
/*
false && true || true
false || true
true
*/
false && (true || true)
/*
false && (true || true)
false && (true)
false
*/
(+null == false) < 1 ** 5
/*
(+null == false) < 1 ** 5
(0 == false) < 1
true < 1
1 < 1
false
*/