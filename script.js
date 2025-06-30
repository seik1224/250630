/*
  [ User List 가져오기 ]

  1. users라는 빈 배열을 만들어주세요.

  2. filteredUsers라는 빈 배열을 만들어주세요.

  3. 데이터 가져오기
  https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json
  
  위 링크에서 데이터를 비동기로 가져와서 테이블에 표시하는 getUsers함수를 작성하세요.

  4. 데이터를 가져오고 그 데이터를 filteredUsers에 넣어주세요.

  5. renderUsers라는 함수로 따로 만들어주세요.
  renderUsers 함수는 필터된 filteredUsers 데이터를 테이블 tr td 태그를 만들어서 데이터를 표시하는 함수입니다.



  [ 종족 필터링 ]

  1. 종족 필터링을 위한 filterByRace함수를 작성하세요.

  2. select 태그의 value값을 가져와서 filteredUsers에 해당하는 데이터만 넣어주세요.

  3. renderUsers함수를 호출하세요.

  4. select 태그에서 value값이 변경될 때마다 filterByRace함수를 호출하세요.
  document.getElementById("raceFilter").addEventListener("change", filterByRace);



  [ 이름 검색 ]

  1. 이름 검색을 위한 searchByName함수를 작성하세요.

  2. input 태그의 value값을 가져와서 filteredUsers에 해당하는 데이터만 넣어주세요.

  3. renderUsers함수를 호출하세요.

  4. input 태그에서 value값이 변경될 때마다 searchByName함수를 호출하세요.
  document.getElementById("searchInput").addEventListener("input", searchByName);



  [ 가입일 정렬 ]

  1. 가입일 정렬을 위한 sortByDate함수를 작성하세요.

  2. 버튼을 클릭할 때마다 filteredUsers를 가입일 순으로 정렬하여 renderUsers함수를 호출하세요.
  document.getElementById("sortDateButton").addEventListener("click", sortByDate);
*/

const users = [];
const filteredUsers = [];


const getUsers = async () => {
  try{
    const response = await fetch('https://raw.githubusercontent.com/seik1224/data-zelda/main/data.json')
    // console.log(await response.json());
    if(!response.ok){
      throw new Error(`에러! ${response.status}`);
    }
    filteredUsers = await response.json();

  } catch(err){
    console.error(err);
    document.querySelector('#userList').innerHTML =
    `<tr><td colspan='5'>데이터 불러오기 실패</td></tr>`
  }
  
}

getUsers();