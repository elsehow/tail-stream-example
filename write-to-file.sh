while true; do
    curl -so /dev/null -w '%{time_total}\n' http://cnn.com/ >> log.txt
    sleep 0.5
done
