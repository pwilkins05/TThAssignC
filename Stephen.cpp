#include <iostream>

using namespace std;

//It runs!!!
int main()
{

    cout << 'Hello world!' << endl;
    int i = 0;

    while(i < 1000)
    {
        cout << "Looping";
        i++;
    }

    int arraything[6] = {1,1,2,3,4,5};

    for(int i = 0; i < 6; i++)
    {
        cout << arraything[i];
    }

    return 0;
}
