const allDigit = document.getElementsByClassName('digit');
const [s1, s2, colon, m1, m2] = allDigit;
let digits = document.querySelector(".digits");

s1.innerHTML = "0";
s2.innerHTML = "0";
m1.innerHTML = "0";
m2.innerHTML = "0";

function clockcounter() {
       if (m2.innerHTML < 9) {
            ++m2.innerHTML;
        } else {
            m2.innerHTML = 0;
            if (m1.innerHTML < 9) {
                ++m1.innerHTML;
            } else {
                m1.innerHTML = 0;
                if (s2.innerHTML < 9) {
                    ++s2.innerHTML;
                } else {
                    s2.innerHTML = 0;
                    clearInterval(count);
                    ++s1.innerHTML;
                    digits.classList.add("redDigit");
                }
            }
        }
    }
    const count = setInterval(function() { clockcounter() }, 10); 
